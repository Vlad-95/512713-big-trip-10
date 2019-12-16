import {createMenuTemplate} from './components/menu.js';
import {createFilterTemplate} from './components/filter.js';
import {createSortTemplate} from './components/sort.js';
import {createCardTemplate} from './components/card-travel.js';
import {createEditTemplate} from './components/edit-card-travel.js';
import {createInformationTemplate} from './components/information.js';
import {tripCards, getTotalPrice} from './mock/card.js';
import {generateMenu} from './mock/menu.js';
import {generateFilters} from './mock/filter.js';
import {getSortedItems} from './mock/sort';

// обращаемся к блоку Основная информация в шапке
const tripInformation = document.querySelector(`.trip-main__trip-info`);


// функция рендера шаблонов
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// рендерим основную ифнормацию в шапке
render(tripInformation, createInformationTemplate(), `afterbegin`);

// обращаемся к блоку c Меню и фильтром
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
// вызываем функцию генерации Меню
const menu = generateMenu();
// рендерим Меню
render(tripControlsContainer.querySelector(`.visually-hidden`), createMenuTemplate(menu), `afterend`);

// вызываем функцию генерации Фильтра
const filters = generateFilters();
// рендерим Фильтры
render(tripControlsContainer, createFilterTemplate(filters), `beforeend`);


// Обращаемся к блоку основного контента страницы
const events = document.querySelector(`.trip-events`);
// вызываем функцию генерации сортировки
const sort = getSortedItems();
// рендерим сортировку
render(events.querySelector(`.visually-hidden`), createSortTemplate(sort), `afterend`);

// обращаемся к списку дней путешествия
const tripList = events.querySelector(`.trip-days`);
/*
* рендерим карточки точек маршрута
* отсортированные по возрастанию дней
*/
tripCards.slice().sort((firstNumber, secondNumber) => {
  return firstNumber.startDate - secondNumber.startDate;
}).forEach((card, index) => {
  render(tripList, createCardTemplate(card, index), `beforeend`);
});

// рендерим карточку редактирования
render(tripList.querySelector(`.trip-events__list`), createEditTemplate(), `afterbegin`);

// обращаемся к блоку с итоговой стоимостью
const totalPriceContainer = document.querySelector(`.trip-info__cost-value`);
// выводим итоговую стоимость
totalPriceContainer.textContent = getTotalPrice().toString();
