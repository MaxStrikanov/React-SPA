import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.css';





const Navigation = () => (
  <div className="navigation">
    <div className="logo">
      <img src= 'https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo1.png' alt="logo"  height = '40' wigth ='40'  alt="logo" />
    </div>
    <nav>
      <ul className="nav">
        <li><Link exact to="/">Главная</Link></li>
        <li><Link exact to="/about">О Компании</Link></li>
        <li><Link exact to="/services">Услуги</Link></li>
        <li><Link exact to="/guarantees">Гарантии</Link></li>
        <li><Link exact to="/reviews">Отзывы</Link></li>
        <li><Link exact to="/contacts">Контакты</Link></li>
      </ul>
    </nav>
   
  </div>
);

export default Navigation;
