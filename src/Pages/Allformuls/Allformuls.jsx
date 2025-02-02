import React, { useEffect, useState } from "react";
import Card from "../Card/Card.jsx";
import OpenAllButton from "../../Buttons/OpenAllButton.jsx";
import ToGameButton from "../../Buttons/ToGameButton.jsx";
import ScrollUpButton from "../../Buttons/ScrollUpButton.jsx";
import { initializeFlipScripts } from "../../scripts/flip.js";
import clearIcon from "../../assets/closed.png";

import formulas from "../FormulasList.jsx";

import "../card_pages.css";

const Allformuls = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setTimeout(() => {
      initializeFlipScripts();
    }, 100);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      initializeFlipScripts();
    }, 100);
  }, [searchText]);

  // Проверяем, есть ли хотя бы одна формула, которая подходит под поиск
  const hasResults = formulas.some((category) =>
    category.formulas.some((formula) =>
      formula.title?.toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div>
      <h2 className="nameonallpage">Все формулы</h2>
      <ScrollUpButton />

      <ToGameButton LinkTo={"/allformulsgame"} Title={"Случайные формулы"} />

      <OpenAllButton />

      <div className="serchfield">
        <input
          type="text"
          placeholder="Поиск формул..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search_item search-input"
        />
        <button
          className="search_item clear_but"
          onClick={() => setSearchText("")}
          disabled={!searchText}
        >
          <img src={clearIcon} alt="" />
        </button>
      </div>

      {/* Надпись "Ничего не найдено" просто получает класс, но не удаляется */}
      <p className={`not-found-text ${hasResults ? "hidden" : ""}`}>
        Ничего не найдено
      </p>

      <div className="formulas-list">
        {formulas.map((category) => {
          // Определяем, есть ли хотя бы одна формула, которая подходит под поиск
          const hasVisibleCards = category.formulas.some((formula) =>
            formula.title?.toLowerCase().includes(searchText.toLowerCase())
          );

          return (
            <div
              key={category.category}
              className={`search_cardsfield ${hasVisibleCards ? "" : "hidden"}`}
            >
              <h2
                className={`namecategoriesonit ${
                  hasVisibleCards ? "" : "hidden"
                }`}
              >
                {category.category}
              </h2>

              <div className="cardsfield">
                {category.formulas.map((formula, index) => {
                  if (formula.podcategory) {
                    // Проверяем, есть ли формулы в этой подкатегории, которые подходят под поиск
                    const hasMatchingSubcategory = category.formulas.some(
                      (f) =>
                        f.podcategory &&
                        f.title &&
                        f.title.toLowerCase().includes(searchText.toLowerCase())
                    );

                    // Если есть формулы с совпадением или строка поиска пустая, показываем подкатегорию
                    return (
                      <h3
                        key={index}
                        className={`namepodcat ${
                          searchText.trim() === "" || hasMatchingSubcategory
                            ? ""
                            : "hidden"
                        }`}
                      >
                        {formula.podcategory}
                      </h3>
                    );
                  }

                  const matchesSearch = formula.title
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase());

                  return (
                    <div
                      key={index}
                      className={matchesSearch ? "visible" : "hidden"}
                    >
                      <Card
                        title={formula.title}
                        contentImage={formula.contentImage}
                        isBig={formula.isBig || false}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Allformuls;
