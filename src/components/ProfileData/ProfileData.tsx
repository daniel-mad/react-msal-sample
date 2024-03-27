import { Account } from "../../libs/models/account.model";
import styles from "./profile-data.module.scss";

export function ProfileData({
  id,
  givenName,
  surname,
  mail,
  displayName,
}: Account) {
  return (
    <div className={styles.card}>
      <h3 className={styles.header}>Welcome {displayName}</h3>
      <ul>
        <li>{givenName}</li>
        <li>{surname}</li>
        <li>{mail}</li>
        <li>{id}</li>
      </ul>
    </div>
  );
}
