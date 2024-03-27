import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

export default function Home() {
  return (
    <>
      <AuthenticatedTemplate>
        <center>
          <h3>You are signed-in. Select profile to call Microsoft Graph.</h3>
        </center>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <center>
          <h3>Please sign in to see your profile.</h3>
        </center>
      </UnauthenticatedTemplate>
    </>
  );
}
