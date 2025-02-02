import React from "react";

const Card = ({ title, contentImage, isBig }) => {
  return (
    <div className={`flashcard ${isBig ? "bigcards" : ""}`}>
      <div className="card-title">{title}</div>
      <div className="card-content">
        <img src={contentImage} alt={title} />
      </div>
    </div>
  );
};

export default Card;
