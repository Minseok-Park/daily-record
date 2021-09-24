import React, { useEffect } from "react";
import styles from "./daily.module.css";
import Header from "../header/header";
import { useHistory } from "react-router";

const Daily = ({ authService }) => {
  const history = useHistory();
  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        history.push("/");
      }
    });
  }, [authService, history]);

  return (
    <section className={styles.daily}>
      <Header onLogout={onLogout} />
      <div className={styles.container}></div>
    </section>
  );
};
export default Daily;
