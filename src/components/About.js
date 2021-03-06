import "../App.css";
import about from "../assets/img/about.jpg";

const About = () => {
  return (
    <div>
      <img src={about} width="100%" alt="" position="relative"></img>
      <p className="textAbout">
        Приют DogShelter - это приют для бездомных собак. В нем живет почти 2500
        собак. Большие и маленькие, пушистые и гладкие, веселые и задумчивые - и
        на всех одна большая мечта - встретить своего Человека и найти Дом.
        Взять домой Если вы хотите взять собаку или кошку, не ищите питомник, в
        котором можно купить щенка или котенка - просто свяжитесь с нами, и вы
        обязательно найдете себе самого лучшего друга. Во всем мире это уже
        стало доброй традицией - человек, который решил завести питомца,
        обращается в приют, чтобы подарить заботу и любовь тому, кто уже
        появился на свет, но ему почему-то досталась нелегкая судьба. Мы поможем
        вам выбрать животное с учетом ваших пожеланий и предпочтений, с радостью
        познакомим со всеми нашими собаками и кошками. Все наши питомцы привиты
        и стерилизованы. Собачий приют DogShelter - это не питомник, поэтому у
        нас не бывает породистых собак с родословной. Но беспородных щенков,
        подростков и молодых собак очень много и поверьте, что такой выбор
        вполне оправдан по многим причинам. Помочь приюту Нашим питомцам нужна
        ваша помощь! Вы можете сделать их жизнь лучше. Приюту DogShelter всегда
        требуются корма, поводки и ошейники, лекарства, материальная и
        информационная поддержка. А еще нашим собакам и кошкам очень нужна ласка
        и общение с человеком, поэтому мы всегда рады новым волонтерам.
      </p>
    </div>
  );
};

export default About;
