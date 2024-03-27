import { useEffect, useState } from "react";
import { getData } from "../../libs/services/graphService";
import { useMsal } from "@azure/msal-react";
import { graphConfig, loginRequest } from "../../libs/auth/authConfig";
import { AuthenticationResult } from "@azure/msal-browser";
import { ProfileData } from "../../components/ProfileData/ProfileData";
import { Account } from "../../libs/models/account.model";

export default function Profile() {
  const [graphData, setGraphData] = useState<null | Account>(null);
  const { instance, accounts } = useMsal();

  useEffect(() => {
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((response: AuthenticationResult) => {
        getData(graphConfig.graphMeEndpoint, response.accessToken)
          .then((data) => setGraphData(data))
          .catch((error) => console.log(error));
      });
  }, []);

  return graphData ? (
    <div className="container">
      <ProfileData {...graphData} />
    </div>
  ) : null;
}
