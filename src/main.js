import {createMenuTemplate} from "./components/menu.js";
import {createFilterTemplate} from "./components/filter.js";
import {createSortTemplate} from "./components/sort.js";
import {createCardTemplate} from "./components/card-travel.js";
import {createEditTemplate} from "./components/edit-card-travel.js";
import {createInformationTemplate} from "./components/information.js";
import {tripCards, getTotalPrice} from "./mock/card.js";
import {generateMenu} from "./mock/menu.js";
import {generateFilters} from "./mock/filter.js";
import {generateSort} from "./mock/sort";

// функция рендера шаблонов
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

// обращаемся к блоку Основная информация в шапке
const tripInformation = document.querySelector(`.trip-main__trip-info`);
// рендерим основную ифнормацию в шапке
render(tripInformation, createInformationTemplate(), `afterbegin`);

// обращаемся к блоку c Меню и фильтром
const tripControlsContainer = document.querySelector(`.trip-main__trip-controls`);
// вызываем функцию генерации Меню
const menu = generateMenu();
// рендерим Меню
render(tripControlsContainer.querySelector(`h2`), createMenuTemplate(menu), `afterend`);

// вызываем функцию генерации Фильтра
const filters = generateFilters();
// рендерим Фильтры
render(tripControlsContainer, createFilterTemplate(filters), `beforeend`);

// Обращаемся к блоку основного контента страницы
const pageContent = document.querySelector(`.trip-events`);

// вызываем функцию генерации сортировки
const sort = generateSort();
// рендерим сортировку
render(pageContent.querySelector(`h2`), createSortTemplate(sort), `afterend`);

// рендерим карточку редактирования
render(pageContent.querySelector(`.trip-events__trip-sort`), createEditTemplate(), `afterend`);

// обращаемся к списку дней путешествия
const tripList = pageContent.querySelector(`.trip-days`);

/*
* рендерим карточки точек маршрута
* отсортированные по возрастанию дней
*/
tripCards.slice().sort(
    function (a, b) {

      return a.startDate - b.startDate;
    }
).forEach((card, index) => {
  render(tripList, createCardTemplate(card, index), `beforeend`);
});

// обращаемся к блоку с итоговой стоимостью
const totalPriceContainer = document.querySelector(`.trip-info__cost-value`);
// выводим итоговую стоимость
totalPriceContainer.textContent = getTotalPrice().toString();
