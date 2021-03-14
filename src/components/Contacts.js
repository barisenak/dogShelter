import "../App.css";
import contacts from "../assets/img/contacts.jpg";

function Contacts() {
  return (
    <>
      <div position="relative">
        <img src={contacts} className="bcgrd_img"></img>
      </div>
      <div className="contacts_wrapper">
        <div className="contacts">
          <p className="bold">E-mail: info@zooshans.by</p>
          <p>Телефон: +375 29 191-109-4</p>
        </div>
        <div className="contacts">
          <p className="bold"> Отдел рекламы: </p>
          <p>Телефон: +375 29 191-109-6</p>
          <p>E-mail: pr@zooshans.by</p>
          <p>Для рекламы: +375291911093</p>
        </div>
        <div className="contacts">
          <p className="bold">Координатор по котам: </p>
          <p>Телефон: +375 29 191-109-4</p>
          <p>E-mail: cat@zooshans.by </p>
        </div>
        <div className="contacts">
          <p className="bold">Координатор по собакам:</p>{" "}
          <p>Телефон: +375 29 191-109-5 </p>
          <p>E-mail: dog@zooshans.by</p>
        </div>
      </div>
    </>
  );
}

export default Contacts;
