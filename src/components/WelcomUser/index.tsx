import { useMsal } from "@azure/msal-react";

export default function WelcomeUser() {
  const { instance } = useMsal();
  const username = instance.getActiveAccount()?.username;
  return <p>Welcome, {username} </p>;
}
