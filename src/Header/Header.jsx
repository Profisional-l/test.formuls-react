import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import monologo from './img/monologo.png';
import sun from './img/sun.png';
import download_icon from './img/download_icon.png';
import './Header.css'; // Подключите стили для компонента

const Header = () => {
  const [isLightTheme, setIsLightTheme] = useState(localStorage.getItem('theme') === 'true');

  useEffect(() => {
    const switchElement = document.getElementById('checkboxswitcher');
    const sliderElement = document.querySelector('.slider');
    const header = document.querySelector('header');
    // Отключаем анимацию
    sliderElement.classList.add('no-transition');
    header.classList.add('no-transition');
    document.body.classList.add('no-transition');

    switchElement.checked = isLightTheme;

    if (isLightTheme) {
      document.body.removeAttribute('dark');
      document.body.setAttribute('light', '');
      document.body.setAttribute('theme', 'light');
    } else {
      document.body.removeAttribute('light');
      document.body.setAttribute('dark', '');
      document.body.setAttribute('theme', 'dark');
    }

    // Включаем анимацию обратно после установки темы
    setTimeout(() => {
      sliderElement.classList.remove('no-transition');
      header.classList.remove('no-transition');
      document.body.classList.remove('no-transition');
    }, 0);
  }, [isLightTheme]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setIsLightTheme(isChecked);
    localStorage.setItem('theme', isChecked);
  };

  return (
    <header>
      {/* <Link to="./"><img className="logoIMG" src={monologo} alt="Logo" /></Link> */}
      <h3 className="logo">
      <Link to="./">
        Formuls
      </Link>
      </h3>
      <img src={sun} style={{ display: 'none' }} alt="Sun" />

      <div className="switche rparent">
        <label className="switch">
          <input id="checkboxswitcher" type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
      </div>

      <div className="godownload">
        <Link to="./InstallPage">
          <button className="downloadbut" type="submit">
            <img src={download_icon} width="25px" alt="Download" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;