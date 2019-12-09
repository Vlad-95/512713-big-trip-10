import {createFilterTemplate} from './components/filter.js';
import {createTripInfoTemplate} from './components/trip-info.js';
import {createItemTemplate} from './components/item.js';
import {createItemEditTemplate} from './components/item-edit.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortTemplate} from './components/sort.js';
/*import {generateItems} from "./mock/item.js";*/
import {generateMenu} from "./mock/menu.js";
import {generateFilters} from "./mock/filter";

const ITEM_COUNT = 3; // количество выводимых элементов

// Функция рэндера шаблонов
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const tripInfo = document.querySelector(`.trip-info`); // обращаемся к блоку Основная информация в шапке
render(tripInfo, createTripInfoTemplate(), `afterbegin`); // рэндерим блок основной информации

const tripControls = document.querySelector(`.trip-controls`); // обращаемся к блоку c Меню и фильтром


const menu = generateMenu();
const filters = generateFilters();
render(tripControls.querySelector(`h2`), createMenuTemplate(menu), `afterend`); // рендерим меню
render(tripControls, createFilterTemplate(filters), `beforeend`); // рендерим фильтры

const tripEvents = document.querySelector(`.trip-events`); // обращаемся к блоку основного контента страницы
render(tripEvents.querySelector(`h2`), createSortTemplate(), `afterend`); // рэндерим сортировку
render(tripEvents, createItemEditTemplate(), `beforeend`);
// рэндерим 3 элемента

/*
const tripItems = generateItems();
for (let i = 0; i < ITEM_COUNT; i++) {
  render(tripEvents, createItemTemplate(tripItems), `beforeend`);
}
*/

