import React, { useEffect, useState } from "react";
import styles from "./daily.module.css";
import Header from "../header/header";
import { useHistory } from "react-router";
import Footer from "../footer/footer";
import DailyList from "../daily_list/daily_list";
import DailyEditor from "../daily_editor/daily_editor";

const Daily = ({ authService }) => {
  const history = useHistory();
  const [dailyCards, setDailyCards] = useState({});

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
      <div className={styles.container}>
        <DailyList dailyCards={dailyCards} />
        <DailyEditor dailyCards={dailyCards} />
      </div>
      <Footer />
    </section>
  );
};
export default Daily;
