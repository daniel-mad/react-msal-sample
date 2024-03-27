import { RouterProvider } from "react-router-dom";
import { PublicClientApplication } from "@azure/msal-browser";
import router from "./libs/router/router";
import { MsalProvider } from "@azure/msal-react";

interface AppProps {
  msalInstance: PublicClientApplication;
}
function App({ msalInstance }: AppProps) {
  return (
    <MsalProvider instance={msalInstance}>
      <RouterProvider router={router} />
    </MsalProvider>
  );
}

export default App;
