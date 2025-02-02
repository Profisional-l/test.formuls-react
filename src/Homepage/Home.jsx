import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import monologo from "./img/monologo.png";
import white_bg from "./img/white_bg1.png";
import betaicon from "./img/betaicon.png";
import loadingLogo from "./img/loadingLOGO.gif";
import downIcon from "./img/down.png";
import iconAll from "./img/icon_all.png";
import iconMechanics from "./img/icon_mechanics.png";
import iconMkt from "./img/icon_mkt.png";
import iconToki from "./img/icon_toki.png";
import iconKolebania from "./img/icon_kolebania.png";
import iconOptics from "./img/icon_optics.png";
import iconAtomic from "./img/icon_atomic.png";
import iconKinematica from "./img/icon_kinematica.png";
import iconDynamica from "./img/icon_dynamica.png";
import iconZaksohrn from "./img/icon_zaksohrn.png";
import iconWatergas from "./img/icon_watergas.png";
import "./Home.css";
import Footer from "../Footer/Footer";
import ToGameButton from "../Buttons/ToGameButton";
import ScrollUpButton from "../Buttons/ScrollUpButton";

const Home = () => {
  // Функция для предзагрузки изображения
  function preloadImage(url) {
    const img = new Image();
    img.src = url;
  }

  // Предзагрузка изображений для темной темы
  preloadImage("./img/bg1.png");
  preloadImage("./Homepage/img/фильтр0.png");
  preloadImage("../Header/img/moon.png");

  // Предзагрузка изображений для светлой темы
  preloadImage("./img/white_bg1.png");
  preloadImage("./img/фильтр.png");
  preloadImage("../Header/img/sun.png");

  function bgactivate() {
    setTimeout(() => {
      document.querySelector(".background").classList.add("visible");
    }, 600);
  }
  useEffect(() => {
    let butToItem2 = document.querySelector(".item_2");
    let butToItem3 = document.querySelector(".item_3");
    let butToItem4 = document.querySelector(".item_4");
    // let butToItem5 = document.querySelector(".item_5");

    let PodItem2 = document.querySelector(".forItem2");
    let PodItem3 = document.querySelector(".forItem3");
    let PodItem4 = document.querySelector(".forItem4");
    // let PodItem5 = document.querySelector(".forItem5");

    let BG = document.querySelector(".BGforItems");
    // Объявляем массивы для кнопок и подэлементов
    let buttons = [];
    let podItems = [];

    // Заполняем массивы кнопками и подэлементами
    for (let i = 2; i <= 4; i++) {
      buttons.push(document.querySelector(`.item_${i}`));
      podItems.push(document.querySelector(`.forItem${i}`));
    }

    // Функция для добавления/удаления классов и обработчиков событий
    function toggleClassesAndEvents(index) {
      podItems[index].classList.remove("BGfadeOut");
      BG.classList.remove("BGfadeOut");
      podItems[index].classList.add("BGfadeIn");
      BG.classList.add("BGfadeIn");

      function removeClassesAndEvents() {
        podItems[index].classList.remove("BGfadeIn");
        BG.classList.remove("BGfadeIn");
        podItems[index].classList.add("BGfadeOut");
        BG.classList.add("BGfadeOut");
      }

      // podItems[index].addEventListener('click', removeClassesAndEvents);
      BG.addEventListener("click", removeClassesAndEvents);
    }

    // Добавляем обработчики событий для каждой кнопки
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", () => {
        // Вызываем функцию для соответствующего подэлемента
        toggleClassesAndEvents(i);
      });
    }
  }, []);

  return (
    <>
      <div className="main-cont">

        <ScrollUpButton />
        <div className="background"></div>
        {bgactivate()}

        <div className="mainscreenhi">
          <h2 className="mainscreenh2">
            Добро пожаловать на <span id="gotosec">Formuls</span>
          </h2>
          <div className="whatIS_inhi">
            <h3>
              Formuls - это приложение для эффективного запоминания формул по
              Физике
            </h3>
          </div>

          <h4 className="linkFromMain">
            <a id="linkTOhow" href="#categoriesfield">
              Как это работает?
            </a>{" "}
            |{" "}
            <Link id="linkTOhow" to="/InstallPage">
              Наше приложение
            </Link>
          </h4>

          <ToGameButton LinkTo={"/allformulsgame"} Title={"Случайные формулы"} />

          <ToGameButton LinkTo={"/podborgame"} Title={"Режим подбора"} />

          <h3 id="selectIT">
            <br />
            Выбирай категорию и начинай! <br />
            <br />
            <div className="arowparent">
              <div className="arrowdown">
                <img src={downIcon} alt="Down" />
              </div>
            </div>
          </h3>
        </div>

        <div className="BGforItems"></div>
        <div className="ParentForDopItems">
          <div className="dopItems forItem2">
            <div className="categoryParent">
              <Link to="/kinematica" className="items item_2_1">
                <img src={iconKinematica} alt="Кинематика" /> <br />
                Кинематика
              </Link>
              <Link to="/dinamica" className="items item_2_2">
                <img src={iconDynamica} alt="Динамика" /> <br />
                Динамика | Законы Ньютона
              </Link>
              <Link to="/statica" className="items item_2_3">
                <img src={iconZaksohrn} alt="Законы сохранения" /> <br />
                Законы сохранения | Мех. Работа
              </Link>
              <Link to="/gasewater" className="items item_2_4">
                <img src={iconWatergas} alt="Жидкости и газы" /> <br />
                Жидкости и газы
              </Link>
            </div>
          </div>
          <div className="dopItems forItem3">
            <div className="categoryParent">
              <Link to="/mkt" className="items item_3_1">
                Молекулярная физика
              </Link>
              <Link to="/termodinamica" className="items item_3_2">
                Термодинамика
              </Link>
            </div>
          </div>
          <div className="dopItems forItem4">
            <div className="categoryParent">
              <Link to="/electrostat" className="items item_4_1">
                Электростатика
              </Link>
              <Link to="/elektrtok" className="items item_4_2">
                Законы постоянного тока
              </Link>
              <Link to="/magnit" className="items item_4_3">
                Магнетизм
              </Link>
            </div>
          </div>
        </div>

        <div className="categoryParent">
          <Link to="/allformuls" className="items item_1">
            <img src={iconAll} alt="Все формулы" /> <br />
            Все формулы
          </Link>
          <div className="items item_2">
            <img src={iconMechanics} alt="Механика" /> <br />
            Механика
          </div>
          <div className="items item_3">
            <img src={iconMkt} alt="МКТ" /> <br />
            МКТ
          </div>
          <div className="items item_4">
            <img src={iconToki} alt="Токи" /> <br />
            Токи
          </div>
          <Link to="/kolebania" className="items item_5">
            <img src={iconKolebania} alt="Колебания и Волны" /> <br />
            Колебания и Волны
          </Link>
          <Link to="/optica" className="items item_6">
            <img src={iconOptics} alt="Оптика" /> <br />
            Оптика
          </Link>
          <Link to="/atom" className="items item_7">
            <img src={iconAtomic} alt="Атомная физика" /> <br />
            Атомная физика
          </Link>
        </div>

        <div id="categoriesfield">
          <div id="maintext" className="textonmaincont">
            <div className="textonmain">
              <h3>Как пользоваться Formuls?</h3>
              <p>
                Способы работы с карточками: <br />
                <br /> 1. <b>Просмотр:</b> пролистывайте карточки, чтобы увидеть
                название формулы и саму формулу. <br />
                <br /> 2. <b>Запоминание:</b> посмотрите название формулы,
                попытайтесь вспомнить её без подсказок, затем проверьте свой
                ответ. <br />
                <br /> 3. <b>Пропись:</b> запишите формулу на бумаге, проверьте
                свою запись, и если есть ошибки, пропишите формулу 3 раза.{" "}
                <br />
                <br /> 4.{" "}
                <b>
                  <Link className="link_in_discription" to="/gamepage">
                    Режим проверки:
                  </Link>
                </b>{" "}
                формулы будут случайно попадаться из всех разделов. Нейросеть
                будет анализировать ваши ответы и выдавать формулы, которые вы
                плохо усвоили, в нужной последовательности. <br />
                <br /> 5.{" "}
                <b>
                  <Link className="link_in_discription" to="/podborgame">
                    Режим подбора:
                  </Link>
                </b>{" "}
                выберите правильную формулу из 4 предложенных. Это помогает
                вашему мозгу зрительно запоминать формулу, когда вы на ней
                сосредоточены!
              </p>
            </div>
          </div>
          <div style={{ marginTop: "20px" }} className="textonmaincont">
            <div className="textonmain">
              <h3>Почему это работает</h3>
              При чтении конспекта или прослушивании лекции мы пассивно
              воспринимаем информацию, и часть из неё забывается. Чтобы лучше
              запомнить знания, нужно активное запоминание, как при ответе на
              вопрос.
              <br />
              <br /> Когда мы сами формулируем ответ, мозг работает активнее, и
              информация запоминается лучше.
              <br />
              <br /> Этот принцип лежит в основе обучения с помощью карточек. Мы
              видим вопрос, пытаемся найти ответ, а затем проверяем себя, открыв
              обратную сторону. Каждый просмотр карточек — это мини-тест,
              который помогает усвоить материал лучше, чем простое чтение. Кроме
              того, карточки удобны для повторения: не нужно носить с собой
              учебники, можно освежать знания небольшими порциями в любое время.
              <br />
              <br />
              Не заучивай! Просто запоминай, занимаясь пару минут в день!
            </div>
          </div>{" "}
          <br />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
