import { initializeFlipScripts } from "./flip.js";
import { useEffect } from "react";

export function getRandomFormula(formulas, prevCard) {
  let newCard;
  do {
    newCard = formulas[Math.floor(Math.random() * formulas.length)];
  } while (newCard === prevCard); // Проверяем, чтобы карточка не повторялась подряд
  return newCard;
}

export function handleGameLogic(
  numOfClicks,
  setNumOfClicks,
  setShowAd,
  setAdFinished,
  setSelectedCard,
  formulas,
  buttonRef,
  prevCard,
  setPrevCard
) {
  const cards = document.querySelectorAll(".flashcard");
  const cardsCloseBg = "var(--var-cardsClose-bg)";

  // Закрываем все карточки перед переключением
  cards.forEach((element) => {
    element.classList.remove("flipped");
    element.style.backgroundColor = cardsCloseBg;
  });
  setShowAd(false);

  if (numOfClicks > 0 && numOfClicks % 15 === 0) {
    setNumOfClicks((prev) => prev + 1);
    setShowAd(true);
    setAdFinished(false);
    buttonRef.current.disabled = true;
    buttonRef.current.textContent = "3 секунды отдыха и рекламы (◕‿◕)";
    buttonRef.current.style.backgroundColor = "#6b6b6b";

    setTimeout(() => {
      setShowAd(true);
      setAdFinished(true);
      buttonRef.current.disabled = false;
      buttonRef.current.textContent = "Следующая карточка";
      buttonRef.current.style.backgroundColor = "";

      // Показываем новую карточку только после окончания рекламы
      const newCard = getRandomFormula(formulas, prevCard);
      setSelectedCard(newCard);
      setPrevCard(newCard); // Запоминаем текущую карточку
    }, 3000);
  } else {
    const newCard = getRandomFormula(formulas, prevCard);
    setSelectedCard(newCard);
    setPrevCard(newCard); // Запоминаем текущую карточку
    setNumOfClicks((prev) => prev + 1);
  }
}

// Функция для инициализации скриптов переворота карточек после рендера
export function useFlipScripts(selectedCard) {
  useEffect(() => {
    if (selectedCard) {
      setTimeout(() => {
        initializeFlipScripts();
      }, 50); // Даем время React перерисовать компонент перед запуском flip.js
    }
  }, [selectedCard]);
}
