import CardTravelComponent from './components/card-travel.js';
import EditCardTravelComponent from './components/edit-card-travel.js';
import FilterComponent from './components/filter.js';
import InformationComponent from './components/information.js';
import MenuComponent from './components/menu.js';
import SortComponent from './components/sort.js';
import CardsListComponent from './components/list.js';
import EmptyList from './components/no-cards.js';
import {tripCards, getTotalPrice} from './mock/card.js';
import {generateMenu} from './mock/menu.js';
import {generateFilters} from './mock/filter.js';
import {getSortedItems} from './mock/sort';
import {render, RenderPosition} from './utils/utils.js';

const renderCard = (tripList, card, index) => {
  const onEscapePress = (evt) => {
    const isEscKey = evt.key === `Escape` || evt.key === `Esc`;

    if (isEscKey) {
      replaceEditToCard();
      document.removeEventListener(`keydown`, onEscapePress);
    }
  };

  const cardComponent = new CardTravelComponent(card, index);
  const replaceCardToEdit = () => {
    tripList.replaceChild(cardComponent.getElement(), cardComponent.getElement());
  };

  const cardEditComponent = new EditCardTravelComponent();
  const replaceEditToCard = () => {
    tripList.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
  };

  const editButtons = cardComponent.getElement().querySelectorAll(`.event__rollup-btn`);
  editButtons.forEach((button) => {
    button.addEventListener(`click`, () => {
      replaceCardToEdit();
      document.addEventListener(`keydown`, onEscapePress);
    });
  });

  const cardEdit = cardEditComponent.getElement();
  cardEdit.addEventListener(`submit`, () => {
    replaceEditToCard();
    document.removeEventListener(`keydown`, onEscapePress);
  });

  render(tripList, cardComponent.getElement(), RenderPosition.BEFOREEND);

};

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


if (tripCards.length === 0) {
  render(events, new EmptyList().getElement(), RenderPosition.BEFOREEND);
} else {
  // обращаемся к блоку Основная информация в шапке
  const tripInformation = document.querySelector(`.trip-main__trip-info`);

  // рендерим основную ифнормацию в шапке
  render(tripInformation, new InformationComponent().getElement(), RenderPosition.AFTERBEGIN);

  // вызываем функцию генерации сортировки
  const sort = getSortedItems();
  // рендерим сортировку
  render(events, new SortComponent(sort).getElement(), RenderPosition.AFTERBEGIN);

  // рендерим контейнер для списка точек маршрута
  render(events, new CardsListComponent().getElement(), RenderPosition.BEFOREEND);

  // обращаемся к списку дней путешествия
  const tripList = events.querySelector(`.trip-days`);

  tripCards.slice().sort((firstNumber, secondNumber) => {
    return firstNumber.startDate - secondNumber.startDate;
  }).forEach((card, index) => {
    renderCard(tripList, card, index);
  });
}

// обращаемся к блоку с итоговой стоимостью
const totalPriceContainer = document.querySelector(`.trip-info__cost-value`);
// выводим итоговую стоимость
totalPriceContainer.textContent = getTotalPrice().toString();
