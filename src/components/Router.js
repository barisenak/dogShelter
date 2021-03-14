import "../App.css";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Favorite from "./Favorite";
import Main from "./Main";
import About from "./About";
import Pets from "./Pets";
import Contacts from "./Contacts";
import Menu from "./Menu";

function Router() {
  return (
    <BrowserRouter>
      <Menu />
      <Switch>
        <Route path="/Главная">
          <Main />
        </Route>
        <Route path="/Избранное">
          <Favorite />
        </Route>
        <Route path="/О приюте">
          <About />
        </Route>
        <Route path="/Наши питомцы">
          <Pets />
        </Route>
        <Route path="/Контакты">
          <Contacts />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
