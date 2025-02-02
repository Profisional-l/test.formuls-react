import React, { useEffect } from 'react';
import "./Buttons.css";
import { Link } from "react-router-dom";

const OpenAllButton = ({LinkTo, Title}) => {
  return (
    <div className="butcont">
      <Link to={LinkTo}>
        <button id="buttogame" type="submit">
          {Title}
        </button>
      </Link>
    </div>
  );
};

export default OpenAllButton;
