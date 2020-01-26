import CardTravelComponent from '../components/card-travel';
import EditCardTravelComponent from '../components/edit-card-travel.js';
import {render, RenderPosition, replace} from "../utils/utils";
import {isEscapePress} from "../utils/escape-press";

const Mode = {
  DEFAULT: `default`,
  EDIT: `edit`
};

export default class PointController {
  constructor(container, onDataChange, onViewChange) {
    this._container = container;
    this._onDataChange = onDataChange;
    this._onViewChange = onViewChange;

    this._mode = Mode.DEFAULT;

    this._CardTravelComponent = null;
    this._EditCardTravelComponent = null;

    this._onEscapePress = this._onEscapePress.bind(this);
    this._replaceEditToCard.bind(this);
  }

  render(card, index) {
    const oldCardTravelComponent = this._CardTravelComponent;
    const oldEditCardTravelComponent = this._EditCardTravelComponent;

    this._CardTravelComponent = new CardTravelComponent(card, index);
    this._EditCardTravelComponent = new EditCardTravelComponent(card);

    this._CardTravelComponent.setEditButtonClickHandler(() => {
      this._replaceCardToEdit();
      document.addEventListener(`keydown`, this._onEscapePress);
    });

    this._EditCardTravelComponent.setFormSubmitHandler((evt) => {
      evt.preventDefault();
      const data = this._EditCardTravelComponent.getData();
      this._onDataChange(this, card, Object.assign({}, card, data));
      this._replaceEditToCard();
    });

    // this._EditCardTravelComponent.setFavouriteButtonClickHandler(() => {
    //  this._onDataChange(this, card, Object.assign({}, card, {
    //    isFavorite: !card.isFavorite,
    //  }));
    // });

    if (oldCardTravelComponent && oldEditCardTravelComponent) {
      replace(this._CardTravelComponent, oldCardTravelComponent);
      replace(this._EditCardTravelComponent, oldEditCardTravelComponent);
    } else {
      render(this._container, this._CardTravelComponent.getElement(), RenderPosition.BEFOREEND);
    }
  }

  setDefaultView() {
    if (this._mode !== Mode.DEFAULT) {
      this._replaceEditToCard();
    }
  }

  _replaceCardToEdit() {
    this._onViewChange();
    replace(this._EditCardTravelComponent, this._CardTravelComponent);
    this._mode = Mode.EDIT;
  }

  _replaceEditToCard() {
    document.removeEventListener(`keydown`, this._onEscapePress);

    this._EditCardTravelComponent.reset();
    replace(this._CardTravelComponent, this._EditCardTravelComponent);
    this._mode = Mode.DEFAULT;
  }

  _onEscapePress(evt) {
    if (isEscapePress(evt)) {
      this._replaceEditToCard();
      document.removeEventListener(`keydown`, this._onEscapePress);
    }
  }
}
