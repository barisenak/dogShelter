import "../App.css";
import mainDog from "./img/mainDog.jpg";
import { useSelector, useDispatch } from "react-redux";

function Main() {
  return (
    <>
      <div position="relative">
        <img src={mainDog} className="bcgrd_img"></img>
      </div>
      {/* <div className="callback_wrapper">
        <div className="callback_head">
          Хотите больше информации? Закажите бесплатный обратный звонок!
        </div>
        <div>
          <input type="text" className="callback_input"></input>
        </div>
        <button className="callback_btn">Отправить запрос</button>
      </div> */}
    </>
  );
}

export default Main;
