import CardTravelComponent from '../components/card-travel';
import EditCardTravelComponent from '../components/edit-card-travel.js';
import CardsListComponent from '../components/list.js';
import InformationComponent from '../components/information.js';
import SortComponent, {SortType} from '../components/sort.js';
import EmptyList from '../components/no-cards.js';
import {tripCards} from '../mock/card.js';
import {render, RenderPosition} from '../utils/utils.js';
import {isEscapePress} from "../utils/escape-press.js";

export default class TripController {
  constructor(container) {
    this._container = container;
    this._EmptyList = new EmptyList();
    this._InformationComponent = new InformationComponent();
    this._SortComponent = new SortComponent();
    this._CardsListComponent = new CardsListComponent();
  }

  render(cards) {
    const container = this._container;

    const renderCard = (tripList, card, index) => {
      const onEscapePress = () => {
        if (isEscapePress) {
          replaceEditToCard();
          document.removeEventListener(`keydown`, onEscapePress);
        }
      };

      const cardComponent = new CardTravelComponent(card, index);
      const replaceCardToEdit = () => {
        tripList.replaceChild(cardEditComponent.getElement(), cardComponent.getElement());
      };

      const cardEditComponent = new EditCardTravelComponent();
      const replaceEditToCard = () => {
        tripList.replaceChild(cardComponent.getElement(), cardEditComponent.getElement());
      };

      cardComponent.setEditButtonClickHandler(() => {
        replaceCardToEdit();
        document.addEventListener(`keydown`, onEscapePress);
      });

      cardEditComponent.setFormSubmitHandler(() => {
        replaceEditToCard();
        document.removeEventListener(`keydown`, onEscapePress);
      });

      render(tripList, cardComponent.getElement(), RenderPosition.BEFOREEND);
    };

    const renderCards = (tripList, renderedCards) => {
      renderedCards.forEach((card, index) => {
        renderCard(tripList, card, index);
      });
    };

    if (tripCards.length === 0) {
      render(container, this._EmptyList.getElement(), RenderPosition.BEFOREEND);
    } else {
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

      renderCards(tripList, cards.slice().sort((a, b) => a.startDate - b.startDate));

      this._SortComponent.setSortTypeChangeHandler((sortType) => {
        let sortedCards = [];

        switch (sortType) {
          case SortType.TIME:
            sortedCards = cards.slice().sort((a, b) => b.startDate - a.startDate);
            break;
          case SortType.PRICE:
            sortedCards = cards.slice().sort((a, b) => b.price - a.price);
            break;
          case SortType.EVENT:
            sortedCards = cards;
            break;
          default:
            sortedCards = cards;
            break;
        }

        tripList.innerHTML = ``;

        renderCards(tripList, sortedCards);
      });

    }
  }
}
