import {createFilterTemplate} from './components/filter.js';
import {createTripInfoTemplate} from './components/info.js';
import {createItemTemplate} from './components/item.js';
import {createEditItemTemplate} from './components/item-edit.js';
import {createMenuTemplate} from './components/menu.js';
import {createSortTemplate} from './components/sort.js';

const ITEM_COUNT = 3; // количество выводимых элементов

// Функция рэндера шаблонов
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const tripInfo = document.querySelector(`.trip-info`); // обращаемся к блоку Основная информация в шапке
render(tripInfo, createTripInfoTemplate(), `afterbegin`); // рэндерим блок основной информации

const tripControls = document.querySelector(`.trip-controls`); // обращаемся к блоку c Меню и фильтром
render(tripControls.querySelector(`h2`), createMenuTemplate(), `afterend`); // рендерим меню
render(tripControls, createFilterTemplate(), `beforeend`); // рендерим фильтры

const tripEvents = document.querySelector(`.trip-events`); // обращаемся к блоку основного контента страницы
render(tripEvents.querySelector(`h2`), createSortTemplate(), `afterend`); // рэндерим сортировку
render(tripEvents, createEditItemTemplate(), `beforeend`);
// рэндерим 3 элемента
for (let i = 0; i < ITEM_COUNT; i++) {
  render(tripEvents, createItemTemplate(), `beforeend`);
}

