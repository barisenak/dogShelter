import "../App.css";
import axios from "axios";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { useState } from "react";

const navbar = ["Главная", "Избранное", "Наши питомцы", "Контакты", "О приюте"];

function Menu() {
  const dispatch = useDispatch();

  let [typedPhone, setTypedPhone] = useState("");
  let [textError, setTextError] = useState("");

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
        response.data === "Номер телефона не введен или введен неверно!"
          ? setTextError(response.data)
          : dispatch(actionSignIn(response.data));
      } catch (err) {
        console.log(err);
      }
    };
  };

  const signOut = () => {
    setTextError("");
    dispatch(actionSignOut);
  };

  return (
    <>
      <div className="sign_in">
        {isSignedInFromRedux ? (
          <div className="welcome_wrapper">
            <p className="welcome bold">
              Добро пожаловать в DogShelter, {userNameFromRedux}!
            </p>
            <button className="sign_btn" onClick={signOut}>
              Выход
            </button>
          </div>
        ) : (
          <div className="welcome_wrapper">
            {textError ? (
              <p className="welcome red">{textError}</p>
            ) : (
              <span className="input_p">Введите номер телефона: </span>
            )}
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
    </>
  );
}

export default Menu;
