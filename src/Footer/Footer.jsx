import React from 'react';
import { Link } from 'react-router-dom';
import appleLogo from "../assets/appleIcon.png";
import androidLogo from "../assets/androidIcon.png";
import tgIcon from '../assets/whitelogotg.png';
import instIcon from '../assets/inst-icon.png';
import './Footer.css'; // Подключите стили для компонента

const Footer = () => {
  return (
    <footer>
      <br /><br />
      <Link to="/InstallPage">
          <button className="buttoappfooter"  type="submit">
          Приложение Formuls <br /> <img src={appleLogo} width="20px" alt="Apple Logo" /> | <img src={androidLogo} width="20px" alt="Android Logo" />
        </button>
      </Link>

      <div className="qwesttgcont">
        <h4 className="qwesttg">Telegram <br /><br />Для Вопросов ↑ Предложений <br /><br /> Instagram <br />↓</h4>
        <a id="tglink" href="https://t.me/jakesooly">
          <img width="27px" id="tgicon" src={tgIcon} alt="Telegram" />
        </a>
      </div>

      <div className="qwesttgcont inst">
        <a id="tglink" href="https://www.instagram.com/formulsxyz/">
          <img width="27px" id="insticon" src={instIcon} alt="Instagram" />
        </a>
      </div>

      <h4 style={{ textAlign: 'center', color: 'rgb(255, 255, 255)' }}>
        <a style={{ color: 'rgb(115, 115, 115)' }} href="./privacy-policy.html">Политика конфиденциальности</a>
        <br /><br />
        Formuls.xyz
      </h4>
    </footer>
  );
};

export default Footer;