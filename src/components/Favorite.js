import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import "../App.css";
import axios from "axios";

let btns_arr = ["возрасту", "адаптивности"];

function Favorite() {
  const [dogs, setDogs] = useState([]);

  const favoritesFromRedux = useSelector((state) => {
    return state.favorites;
  });

  const isSignedInFromRedux = useSelector((state) => {
    return state.isSignedIn;
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/Pets")
      .then((response) => {
        setDogs(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sortFromBig = (item) => {
    item === "возрасту"
      ? setDogs(
          dogs.sort(function (a, b) {
            return a.age - b.age;
          })
        )
      : setDogs(
          dogs.sort(function (a, b) {
            return a.adaptivity - b.adaptivity;
          })
        );
  };

  const sortFromSmall = (item) => {
    item === "возрасту"
      ? setDogs(
          dogs.sort(function (a, b) {
            return b.age - a.age;
          })
        )
      : setDogs(
          dogs.sort(function (a, b) {
            return b.adaptivity - a.adaptivity;
          })
        );
  };

  return (
    <div>
      {isSignedInFromRedux ? (
        <div>
          <div className="sort_wrapper">
            {btns_arr.map((item) => {
              return (
                <div className="btns_wrapper">
                  <p>Сортировать по {item}</p>
                  <button
                    className="sort_btn"
                    onClick={() => sortFromBig(item)}
                  >
                    ↓
                  </button>
                  <button
                    className="sort_btn"
                    onClick={() => sortFromSmall(item)}
                  >
                    ↑
                  </button>
                </div>
              );
            })}
          </div>
          <div className="pet_wrapper">
            {dogs.map((item) => {
              return (
                favoritesFromRedux?.includes(+item.id) && (
                  <div className="pet_card">
                    <p className="pet_name">{item.name}</p>
                    <img
                      src={item.img}
                      alt="picture"
                      width="400px"
                      height="300px"
                      style={{ borderRadius: "15px" }}
                    ></img>
                    <p>Пол: {item.sex}</p>
                    <p>Возраст(в годах): {item.age}</p>
                    <p>Адаптивность к детям: {item.adaptivity}/10</p>
                    <p className="connect">Связь с куратором: {item.phone}</p>
                  </div>
                )
              );
            })}
          </div>
        </div>
      ) : (
        <div className="favorite_text">
          Для добавления в избранное необходимо войти
        </div>
      )}
    </div>
  );
}

export default Favorite;
