import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import ScrollToTop from "./ScrollTop&isMob";

import Header from "./Header/Header";
import Home from "./Homepage/Home";
import InstallPage from "./InstallPage/InstallPage";

import Allformuls from "./Pages/Allformuls/Allformuls";
import Allformulsgame from "./Pages/Allformuls/Allformulsgame";

import Kinematica from "./Pages/Kinematica/Kinematica";
import Kinematicagame from "./Pages/Kinematica/Kinematicagame";

import Dinamica from "./Pages/Dinamica/Dinamica";
import Dinamicagame from "./Pages/Dinamica/Dinamicagame";

import Statica from "./Pages/Statica/Statica";
import Staticagame from "./Pages/Statica/Staticagame";

import Gasewater from "./Pages/Gasewater/Gasewater";
import Gasewatergame from "./Pages/Gasewater/Gasewatergame";

import Mkt from "./Pages/Mkt/Mkt";
import Mktgame from "./Pages/Mkt/Mktgame";

import Termodinamica from "./Pages/Termodinamica/Termodinamica";
import Termodinamicagame from "./Pages/Termodinamica/Termodinamicagame";

const Main = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [inTransition, setInTransition] = useState(false);

  // Создаем ref для каждой страницы
  const nodeRef = useRef(null);

  const handleNavigation = (path) => {
    if (location.pathname === path) return;
    setInTransition(true);
    setTimeout(() => {
      navigate(path);
      setInTransition(false);
    }, 220); // Дождаться окончания анимации перед сменой маршрута
  };

  return (
    <div>
      <Header />
      <ScrollToTop />

      <div className="page-container">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            timeout={300}
            classNames="page"
            unmountOnExit
            nodeRef={nodeRef} // Передаем ref
          >
            <div ref={nodeRef} className="page-wrapper">
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/InstallPage" element={<InstallPage />} />

                <Route path="/allformuls" element={<Allformuls />} />
                <Route path="/allformulsgame" element={<Allformulsgame />} />

                <Route path="/kinematica" element={<Kinematica />} />
                <Route path="/kinematicagame" element={<Kinematicagame />} />

                <Route path="/dinamica" element={<Dinamica />} />
                <Route path="/dinamicagame" element={<Dinamicagame />} />

                <Route path="/statica" element={<Statica />} />
                <Route path="/staticagame" element={<Staticagame />} />

                <Route path="/gasewater" element={<Gasewater />} />
                <Route path="/gasewatergame" element={<Gasewatergame />} />

                <Route path="/mkt" element={<Mkt />} />
                <Route path="/mktgame" element={<Mktgame />} />

                <Route path="/termodinamica" element={<Termodinamica />} />
                <Route path="/termodinamicagame" element={<Termodinamicagame />} />
              </Routes>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

export default App;