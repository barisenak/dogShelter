import { useEffect, useState } from "react";
import "../App.css";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

let btns_arr = ["возрасту", "адаптивности к детям"];

function Pets() {
  const dispatch = useDispatch();

  const [dogs, setDogs] = useState([]);
  const [fav, setFav] = useState([]);

  const favoritesFromRedux = useSelector((state) => {
    return state.favorites;
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
  }, []); // useEffect вызывается при изменении любой переменной компонента, после запят указываем массив перем(зависимости) при измен которых отраб useEff (лучше много эффектов). пустой массив - значит вызовется на первом рендера и

  const addToFav = (item) => {
    console.log(favoritesFromRedux);
    favoritesFromRedux.push(item);
    console.log(favoritesFromRedux);
    dispatch({
      type: "CHANGE_FAV",
      payload: favoritesFromRedux,
    });
    setFav(favoritesFromRedux);
  };

  const delFromFav = (item) => {
    let index = favoritesFromRedux.indexOf(item);
    console.log(index);
    favoritesFromRedux.splice(index, 1);
    console.log(favoritesFromRedux);
    dispatch({
      type: "CHANGE_FAV",
      payload: favoritesFromRedux,
    });
    setFav(favoritesFromRedux);
    console.log(favoritesFromRedux);
  };

  return (
    <div>
      <div className="sort_wrapper">
        {btns_arr.map((item) => {
          return (
            <div className="btns_wrapper">
              <p>Сортировать по {item}</p>
              <button className="sort_btn">↓</button>
              <button className="sort_btn">↑</button>
            </div>
          );
        })}
      </div>

      <div className="pet_wrapper">
        {dogs.map((item, id) => {
          return (
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
              <div className="svg_wrapper">
                <svg
                  className={
                    favoritesFromRedux.includes(+item.id)
                      ? "red heart"
                      : "heart"
                  }
                  onClick={
                    favoritesFromRedux.includes(+item.id)
                      ? () => delFromFav(+item.id)
                      : () => addToFav(+item.id)
                  }
                  viewBox="0 0 511.626 511.626"
                >
                  <path
                    d="M475.366,71.949c-24.175-23.606-57.575-35.404-100.215-35.404c-11.8,0-23.843,2.046-36.117,6.136
		c-12.279,4.093-23.702,9.615-34.256,16.562c-10.568,6.945-19.65,13.467-27.269,19.556c-7.61,6.091-14.845,12.564-21.696,19.414
		c-6.854-6.85-14.087-13.323-21.698-19.414c-7.616-6.089-16.702-12.607-27.268-19.556c-10.564-6.95-21.985-12.468-34.261-16.562
		c-12.275-4.089-24.316-6.136-36.116-6.136c-42.637,0-76.039,11.801-100.211,35.404C12.087,95.55,0,128.286,0,170.16
		c0,12.753,2.24,25.891,6.711,39.398c4.471,13.514,9.566,25.031,15.275,34.546c5.708,9.514,12.181,18.792,19.414,27.834
		c7.233,9.041,12.519,15.272,15.846,18.698c3.33,3.426,5.948,5.903,7.851,7.427L243.25,469.938
		c3.427,3.426,7.614,5.144,12.562,5.144s9.138-1.718,12.563-5.144l177.87-171.31c43.588-43.58,65.38-86.406,65.38-128.472
		C511.626,128.279,499.54,95.546,475.366,71.949z M421.405,271.795L255.813,431.391L89.938,271.507
		C54.344,235.922,36.55,202.133,36.55,170.156c0-15.415,2.046-29.026,6.136-40.824c4.093-11.8,9.327-21.177,15.703-28.124
		c6.377-6.949,14.132-12.607,23.268-16.988c9.141-4.377,18.086-7.328,26.84-8.85c8.754-1.52,18.079-2.281,27.978-2.281
		c9.896,0,20.557,2.424,31.977,7.279c11.418,4.853,21.934,10.944,31.545,18.271c9.613,7.332,17.845,14.183,24.7,20.557
		c6.851,6.38,12.559,12.229,17.128,17.559c3.424,4.189,8.091,6.283,13.989,6.283c5.9,0,10.562-2.094,13.99-6.283
		c4.568-5.33,10.28-11.182,17.131-17.559c6.852-6.374,15.085-13.222,24.694-20.557c9.613-7.327,20.129-13.418,31.553-18.271
		c11.416-4.854,22.08-7.279,31.977-7.279s19.219,0.761,27.977,2.281c8.757,1.521,17.702,4.473,26.84,8.85
		c9.137,4.38,16.892,10.042,23.267,16.988c6.376,6.947,11.612,16.324,15.705,28.124c4.086,11.798,6.132,25.409,6.132,40.824
		C475.078,202.133,457.19,236.016,421.405,271.795z"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pets;
