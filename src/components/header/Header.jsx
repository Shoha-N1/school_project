import React from "react";
import "./Header.scss";
import Logo from "./../../assets/Group1.svg";

export default function Header() {
  return (
    <div className="box">
      <nav>
      <h1>
        <a href="/">
          <img src={Logo} alt="logo" />
        </a>
      </h1>

        <ul>
          <li>
            <a href="#">Чему вы научитесь</a>
          </li>
          <li>
            <a href="#">Процесс обучения</a>
          </li>
          <li>
            <a href="#">Стоимость</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
          <li className="reg">
            <a href="#">Регистрация</a>
          </li>
          <button>
            <a href="#">Войти</a>
          </button>
        </ul>
      </nav>
    </div>
  );
}
