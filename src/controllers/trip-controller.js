import CardsListComponent from '../components/list.js';
import InformationComponent from '../components/information.js';
import SortComponent, {SortType} from '../components/sort.js';
import EmptyList from '../components/no-cards.js';
import {tripCards} from '../mock/card.js';
import {render, RenderPosition} from '../utils/utils.js';
import PointControllerComponent from '../controllers/point-controller';

const renderCards = (tripList, cards, onDataChange, onViewChange) => {
  return cards.map((card, index) => {
    const cardController = new PointControllerComponent(tripList, onDataChange, onViewChange);
    cardController.render(card, index);

    return cardController;

  });
};

export default class TripController {
  constructor(container) {
    this._container = container;
    this._cards = [];
    this._tripControllers = [];
    this._EmptyList = new EmptyList();
    this._InformationComponent = new InformationComponent();
    this._SortComponent = new SortComponent();
    this._CardsListComponent = new CardsListComponent();
    this._onDataChange = this._onDataChange.bind(this);
    this._onViewChange = this._onViewChange.bind(this);
    this._onSortTypeChange = this._onSortTypeChange.bind(this);
    this._SortComponent.setSortTypeChangeHandler(this._onSortTypeChange);
  }

  render(cards) {
    this._cards = cards;

    const container = this._container;

    if (tripCards.length === 0) {
      render(container, this._EmptyList.getElement(), RenderPosition.BEFOREEND);

      return;
    }
    // обращаемся к блоку Основная информация в шапке
    const tripInformation = document.querySelector(`.trip-main__trip-info`);
    // рендерим основную ифнормацию в шапке
    render(tripInformation, this._InformationComponent.getElement(), RenderPosition.AFTERBEGIN);
    // рендерим сортировку
    render(container, this._SortComponent.getElement(), RenderPosition.AFTERBEGIN);
    // рендерим контейнер для списка точек маршрута
    render(container, this._CardsListComponent.getElement(), RenderPosition.BEFOREEND);
    // обращаемся к списку дней путешествия
    const tripList = container.querySelector(`.trip-days`);

    const newCards = renderCards(tripList, this._cards.slice().sort((a, b) => a.startDate - b.startDate), this._onDataChange, this._onViewChange);

    this._tripControllers = this._tripControllers.concat(newCards);
  }

  _onDataChange(pointController, oldData, newData) {
    const index = this._cards.findIndex((it) => it === oldData);

    if (index === -1) {
      return;
    }

    this._cards = [].concat(this._cards.slice(0, index), newData, this._cards.slice(index + 1));

    pointController.render(this._cards[index]);
  }

  _onViewChange() {
    this._tripControllers.forEach((it) => it.setDefaultView());
  }


  _onSortTypeChange(sortType) {
    let sortedCards = [];

    switch (sortType) {
      case SortType.TIME:
        sortedCards = this._cards.slice().sort((a, b) => b.startDate - a.startDate);
        break;
      case SortType.PRICE:
        sortedCards = this._cards.slice().sort((a, b) => b.price - a.price);
        break;
      default:
        sortedCards = this._cards;
        break;
    }

    const tripList = this._CardsListComponent.getElement();

    tripList.innerHTML = ``;

    this._tripControllers = renderCards(tripList, sortedCards, this._onDataChange, this._onViewChange);

    renderCards(tripList, sortedCards);
  }
}
