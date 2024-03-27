import { useMsal } from "@azure/msal-react";

export default function SignInButton() {
  const { instance } = useMsal();

  const handleSignIn = () => {
    instance.loginRedirect();
  };
  return (
    <button className="btn" onClick={handleSignIn}>
      SIGN IN
    </button>
  );
}
