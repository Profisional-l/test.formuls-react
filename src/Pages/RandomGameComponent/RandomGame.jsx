import React, { useState, useRef } from "react";
import Card from "../Card/Card";
import {
  handleGameLogic,
  useFlipScripts,
} from "../../scripts/randomgameLogic.js";
import ad_post from "../../assets/ad_post.png";
import "./RandomGame.css";

// Импортируем данные формул, предполагаем, что файл называется `FormulasList.js`
import formulas from "../FormulasList";

function bgactivate() {
  setTimeout(() => {
    document.querySelector(".background").classList.add("visible");
  }, 600);
}

// Компонент RandomGame теперь принимает категорию как пропс
const RandomGame = ({ categoryName }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [prevCard, setPrevCard] = useState(null); // Запоминаем предыдущую карточку
  const [numOfClicks, setNumOfClicks] = useState(0);
  const [showAd, setShowAd] = useState(false);
  const [adFinished, setAdFinished] = useState(true);
  const buttonRef = useRef(null);

  // Динамически фильтруем формулы в зависимости от категории
  let categoryFormulas = [];

  if (categoryName === "allformuls") {
    categoryFormulas = formulas.flatMap(
      (category) => category.formulas.filter((formula) => !formula.podcategory) // Исключаем подкатегории
    );
  } else {
    const selectedCategory = formulas.find(
      (category) => category.category === categoryName
    );

    if (!selectedCategory) {
      return <div>Категория не найдена</div>;
    }

    categoryFormulas = selectedCategory.formulas.filter(
      (formula) => formula.title && !formula.podcategory // Исключаем подкатегории
    );
  }

  // Перезапускаем flip.js, когда обновляется карточка
  useFlipScripts(selectedCard);

  return (
    <div className="game-container">
      <div className="background"></div>
      {bgactivate()}

      {/* <p className="click-counter">Клики: {numOfClicks}</p> */}

      {numOfClicks === 0 ? (
        <div className="parentexttogame">
          <p className="texttogame">
            {categoryName === "allformuls" ? (
              <>
                В этом режиме вы будете получать случайные карточки с формулами
                из всех разделов, что отлично поможет проверить и закрепить
                знания.
              </>
            ) : (
              <>
                В этом режиме вы будете получать случайные карточки с формулами
                из раздела <b>{categoryName}</b>, что поможет проверить и
                закрепить знания по теме.
              </>
            )}
          </p>
        </div>
      ) : (
        ""
      )}

      {showAd ? (
        <div className="cardsfield ad-container">
          <a
            href="https://is.gd/efmJ3l"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={ad_post} alt="Реклама" />
          </a>
        </div>
      ) : (
        selectedCard && (
          <div className="cardsfield">
            <Card
              title={selectedCard.title}
              contentImage={selectedCard.contentImage}
              isBig={selectedCard.isBig}
            />
          </div>
        )
      )}
      <div className="game-button-cont">
        <button
          ref={buttonRef}
          onClick={() =>
            handleGameLogic(
              numOfClicks,
              setNumOfClicks,
              setShowAd,
              setAdFinished,
              setSelectedCard,
              categoryFormulas,
              buttonRef,
              prevCard,
              setPrevCard // Передаем функцию обновления предыдущей карточки
            )
          }
          className="game-button"
          id="buttogame"
        >
          {numOfClicks === 0 ? "Начать" : "Следующая карточка"}
        </button>
      </div>
    </div>
  );
};

export default RandomGame;
