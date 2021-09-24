import { BrowserRouter, Switch, Route } from "react-router-dom";
import styles from "./app.module.css";
import Daily from "./components/daily/daily";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/daily">
            <Daily authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
