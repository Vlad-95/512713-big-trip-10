
import AbstractComponent from "./abstract-component";

const emptyListTemplate = () => {
  return (
    `<p class="trip-events__msg">Click New Event to create your first point</p>`
  );
};

export default class EmptyList extends AbstractComponent{
    getTemplate() {
        return emptyListTemplate();
    }
};


/*export default class EmptyList {
  constructor() {
    this._element = null;
  }

  getTemplate() {
    return emptyListTemplate();
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}*/
