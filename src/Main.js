import "./App.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import mainDog from "./mainDog.jpg";
import Favorite from "./Favorite";

const navbar = ["Главная", "Избранное", "Наши питомцы", "Контакты", "О приюте"];

function Main() {
  return (
    <BrowserRouter>
      <div className="billboard">
        {navbar.map((item) => {
          return (
            <Link to={`/${item}`}>
              <button className="btn">{item}</button>
            </Link>
          );
        })}
      </div>
      <div>
        <img src={mainDog} width="100%" alt=""></img>
      </div>
      <Switch>
        <Route path="/Главная">
          <Main />
        </Route>
        <Route path="/Избранное">
          <Favorite />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
