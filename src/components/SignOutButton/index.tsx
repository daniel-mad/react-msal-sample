import { useMsal } from "@azure/msal-react";

export default function SignOutButton() {
  const { instance } = useMsal();
  const handleSignOut = () => {
    instance.logoutRedirect();
  };
  return (
    <button className="btn" onClick={handleSignOut}>
      SIGN OUT
    </button>
  );
}
