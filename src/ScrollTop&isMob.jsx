// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isMobile } from "./scripts/for_mobile"; // Импортируем вашу функцию
const ScrollToTop = () => {
  const location = useLocation(); // Получаем текущий маршрут

  useEffect(() => {
    // Сбрасываем прокрутку до верхней части страницы
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 220); // Даем время рендеру
    
    isMobile();
  }, [location]); // Эффект срабатывает при изменении маршрута

  return null; // Этот компонент не рендерит ничего
};

export default ScrollToTop;
