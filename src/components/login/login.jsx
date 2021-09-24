import React, { useEffect } from "react";
import sytles from "./login.module.css";
import Header from "../header/header";
import Footer from "../footer/footer";
import { useHistory } from "react-router";

const Login = ({ authService }) => {
  const history = useHistory();

  const goToDaily = (userId) => {
    history.push({
      pathname: "/daily",
      state: {
        id: userId,
      },
    });
  };

  const onLogin = (event) => {
    const text = event.currentTarget.innerText;
    authService.login(text).then((result) => goToDaily(result.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      user && goToDaily(user.uid);
    });
  });
  return (
    <section className={sytles.login}>
      <Header />
      <section>
        <h1>로그인</h1>
        <ul className={sytles.login_container}>
          <li className={sytles.login_list}>
            <button className={sytles.login_button} onClick={onLogin}>
              Google
            </button>
          </li>

          <li className={sytles.login_list}>
            <button className={sytles.login_button} onClick={onLogin}>
              Github
            </button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  );
};
export default Login;
