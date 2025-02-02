import React from "react";
import Footer from "../Footer/Footer";
import ScrollUpButton from "../Buttons/ScrollUpButton";
import "./InstallPage.css";
import GooglePlayQR from "../assets/GooglePlayQR.png";
import AndroidIcon from "../assets/androidIcon.png";
import AppleIcon from "../assets/appleIcon.png";
import GooglePlayIcon from "../assets/googlePlayIcon.png";
import ShareIcon from "../assets/share.png";

const InstallPage = () => {
  function bgactivate() {
    setTimeout(() => {
      document.querySelector(".background").classList.add("visible");
    }, 600);
    setTimeout(() => {
      document.querySelector(".buttoappfooter").style.display = "none"
    }, 1);
  }
  return (
    <>
      <div className="main-cont">
      <div className="background"></div>
      {bgactivate()}

        <ScrollUpButton />
        <div style={{ textAlign: "start" }} className="mainscreenhi">
          <h2 style={{ textAlign: "center" }} className="mainscreenh2">
            <br />
            Мобильное приложение <span id="gotosec">Formuls</span>
          </h2>

          <br />
          <div className="textonmain">
            <h3>
              <img src={AndroidIcon} width="20px" alt="" /> Android:
            </h3>
              <br />
            <div className="buttogamecont">
              <a href="https://play.google.com/store/apps/details?id=com.finetest.formuls">
                <button id="buttoappmarket" type="submit">
                  Google Play{" "}
                  <img src={GooglePlayIcon} alt="" />
                </button>
              </a>
            </div>

            <br />
            <div className="qrcodeCont">
              <h3>Сканируй QR-код на своём смартфоне ↓ </h3>
              <img
                id="QRtoGooglePlay"
                src={GooglePlayQR}
                alt=""
              />
              <br />
            </div>
            <br />
            <div id="iOSApp"></div>

            <h4>
              PS: Нам будет очень приятно если вы поделитесь своими
              впечатлениями после использования приложением Formuls и оцените
              его (◕‿◕)!
            </h4>
          </div>

          <br />
          <div className="textonmain">
            <h3>
              <img src={AppleIcon} width="20px" alt="" /> iOS:
            </h3>
            Чтобы установить Formuls перейди на{" "}
            <a
              style={{ color: "rgb(180, 100, 255)" }}
              href="https://formuls.xyz"
            >
              главный экран сайта
            </a>{" "}
            и нажми на кнопку поделиться "
            <img src={ShareIcon} width="20px" alt="" />" (на панеле
            браузера) и затем найди опцию "На экран «Домой»".
            <br />
            <h4>
              PS: Нативное приложение для iOS ещё находится в разработке. Мы постараемся
              выпустить его в App Store как можно скорее!
            </h4>
            <br />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InstallPage;
