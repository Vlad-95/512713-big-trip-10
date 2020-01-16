import CardTravelComponent from './components/card-travel.js';
import EditCardTravelComponent from './components/edit-card-travel.js';
import FilterComponent from './components/filter.js';
import InformationComponent from './components/information.js';
import MenuComponent from './components/menu.js';
import SortComponent from './components/sort.js';
import CardsListComponent from './components/list.js';
import {tripCards, getTotalPrice} from './mock/card.js';
import {generateMenu} from './mock/menu.js';
import {generateFilters} from './mock/filter.js';
import {getSortedItems} from './mock/sort';
import {render, RenderPosition} from './utils/utils.js';
// обращаемся к блоку Основная информация в шапке
const tripInformation = document.querySelector(`.trip-main__trip-info`);

// рендерим основную ифнормацию в шапке
render(tripInformation, new InformationComponent().getElement(), RenderPosition.AFTERBEGIN);

// обращаемся к блоку c Меню и фильтром
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
// вызываем функцию генерации Меню
const menu = generateMenu();
// рендерим Меню
render(tripControlsContainer, new MenuComponent(menu).getElement(), RenderPosition.AFTERBEGIN);

// вызываем функцию генерации Фильтра
const filters = generateFilters();
// рендерим Фильтры
render(tripControlsContainer, new FilterComponent(filters).getElement(), RenderPosition.BEFOREEND);


// Обращаемся к блоку основного контента страницы
const events = document.querySelector(`.trip-events`);
// вызываем функцию генерации сортировки
const sort = getSortedItems();
// рендерим сортировку
render(events, new SortComponent(sort).getElement(), RenderPosition.AFTERBEGIN);
// рендерим контейнер для списка точек маршрута
render(events, new CardsListComponent().getElement(), RenderPosition.BEFOREEND);
// обращаемся к списку дней путешествия
const tripList = events.querySelector(`.trip-days`);
/*
* рендерим карточки точек маршрута
* отсортированные по возрастанию дней
*/
tripCards.slice().sort((firstNumber, secondNumber) => {
  return firstNumber.startDate - secondNumber.startDate;
}).forEach((card, index) => {
  render(tripList, new CardTravelComponent(card, index).getElement(), RenderPosition.BEFOREEND);
});

// рендерим карточку редактирования
render(tripList.querySelector(`.trip-events__list`), new EditCardTravelComponent().getElement(), RenderPosition.AFTERBEGIN);

// обращаемся к блоку с итоговой стоимостью
const totalPriceContainer = document.querySelector(`.trip-info__cost-value`);
// выводим итоговую стоимость
totalPriceContainer.textContent = getTotalPrice().toString();
