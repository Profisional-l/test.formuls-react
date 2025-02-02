import React, { useEffect } from "react";
import "./Buttons.css";
import { initializeFlipScripts } from "../scripts/flip.js";

const OpenAllButton = () => {
  useEffect(() => {
    initializeFlipScripts();
  }, []); // Запускаем логику переворота карточек один раз при загрузке

  return (
    <div className="butcont stick">
      <button className="opencards">Открыть все карточки</button>
    </div>
  );
};

export default OpenAllButton;
