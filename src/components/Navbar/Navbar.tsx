import { useIsAuthenticated } from "@azure/msal-react";
import SignInButton from "../SignInButton";
import SignOutButton from "../SignOutButton";
import WelcomeUser from "../WelcomUser";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isAuthenticated = useIsAuthenticated();
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <h4>AAD MSAL</h4>
      </Link>

      <div className={styles.cornerItems}>
        {isAuthenticated ? <WelcomeUser /> : null}
        <Link to="profile" className="btn">
          Profile
        </Link>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </div>
    </nav>
  );
}
