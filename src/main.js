import FilterComponent from './components/filter.js';
import MenuComponent from './components/menu.js';
import TripControllerComponent from './controllers/trip-controller.js';
import {tripCards, getTotalPrice} from './mock/card.js';
import {render, RenderPosition} from './utils/utils.js';

// обращаемся к блоку c Меню и фильтром
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);

// рендерим Меню
render(tripControlsContainer, new MenuComponent().getElement(), RenderPosition.AFTERBEGIN);
// рендерим Фильтры
render(tripControlsContainer, new FilterComponent().getElement(), RenderPosition.BEFOREEND);

// Обращаемся к блоку основного контента страницы
const events = document.querySelector(`.trip-events`);

const tripController = new TripControllerComponent(events);

tripController.render(tripCards);

// обращаемся к блоку с итоговой стоимостью
const totalPriceContainer = document.querySelector(`.trip-info__cost-value`);
// выводим итоговую стоимость
totalPriceContainer.textContent = getTotalPrice().toString();
