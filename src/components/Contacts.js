import "../App.css";
import contacts from "./img/contacts.jpg";

function About() {
  return (
    <div className="contacts_wrapper">
      <div className="contacts">
        <p className="bold">E-mail: info@zooshans.by</p>
        <p>Контактный телефон: +375 29 191-109-4</p>
      </div>
      <div className="contacts">
        <p className="bold"> Отдел рекламы: </p>
        <p>Контактный телефон: +375 29 191-109-6</p>
        <p>E-mail: pr@zooshans.by</p>
        <p>Для рекламы в соц.сетях: +375291911093</p>
      </div>
      <div className="contacts">
        <p className="bold">Координатор по котам: </p>
        <p>Контактный телефон: +375 29 191-109-4</p>
        <p>E-mail: cat@zooshans.by </p>
      </div>
      <div className="contacts">
        <p className="bold">Координатор по собакам:</p>{" "}
        <p>Контактный телефон: +375 29 191-109-5 </p>
        <p>E-mail: dog@zooshans.by</p>
      </div>
    </div>
  );
}

export default About;
