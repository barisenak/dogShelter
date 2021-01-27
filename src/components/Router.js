import "../App.css";
import axios from "axios";

import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Favorite from "./Favorite";
import Main from "./Main";
import About from "./About";
import Pets from "./Pets";
import Contacts from "./Contacts";

import { useState } from "react";

const navbar = ["Главная", "Избранное", "Наши питомцы", "Контакты", "О приюте"];

function Router() {
  const dispatch = useDispatch();

  let [typedPhone, setTypedPhone] = useState("");

  const isSignedInFromRedux = useSelector((state) => {
    return state.isSignedIn;
  });

  const userNameFromRedux = useSelector((state) => {
    return state.userName;
  });

  const actionSignIn = (users) => ({
    type: "SIGN_IN",
    payload: users,
  });

  const actionSignOut = {
    type: "SIGN_OUT",
  };

  const checkPhone = (typedPhone) => {
    return async () => {
      try {
        const response = await axios.post("http://localhost:3001/sign-in", {
          typedPhone: typedPhone,
        });
        dispatch(actionSignIn(response.data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  const signOut = () => {
    dispatch(actionSignOut);
  };

  return (
    <BrowserRouter>
      <div className="sign_in">
        {isSignedInFromRedux ? (
          <div className="welcome_wrapper">
            <p className="welcome">
              Добро пожаловать в DogShelter, {userNameFromRedux}!
            </p>
            <button className="sign_btn" onClick={signOut}>
              Выход
            </button>
          </div>
        ) : (
          <div>
            <span>Введите номер телефона: </span>
            <input
              className="sign_in_input"
              type="text"
              value={typedPhone}
              onChange={(event) => {
                setTypedPhone(event.target.value);
              }}
            ></input>
            <button className="sign_btn" onClick={checkPhone(typedPhone)}>
              Войти
            </button>
          </div>
        )}
      </div>
      <div className="billboard">
        {navbar.map((item) => {
          return (
            <Link to={`/${item}`}>
              <button className={item === "Наши питомцы" ? "btn big" : "btn"}>
                {item}
              </button>
            </Link>
          );
        })}
      </div>
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
