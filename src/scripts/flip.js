export function initializeFlipScripts() {
  let flippedCard = null;
  let allCardsFlipped = false;
  const cards = document.querySelectorAll(".flashcard");
  const openButton = document.querySelector(".opencards");
  const cardsOpenBg = "var(--var-cardsOpen-bg)";
  const cardsCloseBg = "var(--var-cardsClose-bg)";
  const openallbutBg = "var(--var-openallbut-bg)";

  function toggleCard(card) {
    if (allCardsFlipped) return; // Если все карточки открыты, блокируем клик
    card.classList.toggle("flipped");

    if (card.classList.contains("flipped")) {
      card.style.backgroundColor = cardsOpenBg;
      if (flippedCard && flippedCard !== card) {
        flippedCard.classList.remove("flipped");
        flippedCard.style.backgroundColor = cardsCloseBg;
      }
      flippedCard = card;
    } else {
      card.style.backgroundColor = cardsCloseBg;
      flippedCard = null;
    }
  }

  function toggleAllCards() {
    if (allCardsFlipped) {
      // Закрываем все карточки
      cards.forEach((card) => {
        card.classList.remove("allflipped", "flipped");
        card.style.backgroundColor = cardsCloseBg;
      });
      openButton.innerText = "Открыть все карточки";
      openButton.style.background = openallbutBg;
      openButton.style.color = "#FFF";
      openButton.style.borderColor = "#ffffff33";
      allCardsFlipped = false;
    } else {
      // Открываем все карточки
      cards.forEach((card) => {
        card.classList.remove("flipped");
        card.classList.add("allflipped");
        card.style.backgroundColor = cardsOpenBg;
      });
      openButton.innerText = "Закрыть все карточки";
      openButton.style.background = "#ffffffe8";
      openButton.style.color = "#000";
      openButton.style.borderColor = "#0000003a";
      allCardsFlipped = true;
      flippedCard = null;
    }
  }

  // Добавляем обработчики для карточек
  cards.forEach((card) => {
    if (!card.hasAttribute("data-listener")) {
      card.setAttribute("data-listener", "true");
      card.addEventListener("click", () => toggleCard(card));
    }
  });

  // Добавляем обработчик на кнопку "Открыть карточки"
  if (openButton && !openButton.hasAttribute("data-listener")) {
    openButton.setAttribute("data-listener", "true");
    openButton.addEventListener("click", toggleAllCards);
  }
}

// Автоматически запускаем при загрузке страницы
document.addEventListener("DOMContentLoaded", initializeFlipScripts);
