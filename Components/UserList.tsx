import { useContext } from "react";
import { DataContext } from "../pages";
import User from "./User";
import styles from "../styles/Home.module.css";
export default function UserList() {
  let context = useContext(DataContext);
  return (
    <>
      <a href={context.state?.url}>
        <h1 className={styles.name}>
          {context.state?.nameWithOwner}
          <div className={styles.count}>
            How many stars? {context.state?.stargazerCount}
          </div>
        </h1>
      </a>

      <br />
      <div className={styles.grid}>
        {context.state?.info?.map((user: any, key: any) => (
          <User key={key} data={user} />
        ))}
      </div>
    </>
  );
}
