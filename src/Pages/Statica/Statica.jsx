import React, { useEffect } from 'react';
import Card from '../Card/Card';
import OpenAllButton from '../../Buttons/OpenAllButton';
import ToGameButton from '../../Buttons/ToGameButton'
import ScrollUpButton from '../../Buttons/ScrollUpButton.jsx';
import { initializeFlipScripts } from '../../scripts/flip.js';
import formulas from '../FormulasList.jsx';

import '../card_pages.css';

const Kinematica = () => {

  useEffect(() => {
    setTimeout(() => {
      initializeFlipScripts();
    }, 100); // Даем время рендеру
  }, [Card]);
  const WhatCategory = "Законы сохранения | Мех. Работа"
  const FilterCategory = formulas.find(category => category.category === WhatCategory);


  return (
    <div>

      <ScrollUpButton/>

      <h2 className="nameonallpage">{WhatCategory}</h2>

      <ToGameButton LinkTo={"/staticagame"} Title={"Случайные формулы по разделу"}/>

      <OpenAllButton/>

      <div className="formulas-list">
      {FilterCategory && (
        <div key={FilterCategory.category}>
          <div className="cardsfield">
            {FilterCategory.formulas.map((formula, index) => {
              if (formula.podcategory) {
                return <h3 className='namepodcat' key={index}>{formula.podcategory}</h3>; // Отображаем подкатегорию
              }
              return (
                <Card
                  key={index}
                  title={formula.title}
                  contentImage={formula.contentImage}
                  isBig={formula.isBig || false} // Устанавливаем isBig, если указано
                />
              );
            })}
          </div>
        </div>
      )}
    </div>

    </div>
  );
};

export default Kinematica;