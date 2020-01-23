import {createElement} from '../utils/utils.js';

const createMenuItem = (menu) => {
  const {item} = menu;
  return (
    `<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${item}</a>`
  );
};

const createMenuTemplate = (menu) => {
  const menuItem = menu.map((it, i) => createMenuItem(it, !i)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
       ${menuItem}
    </nav>`
  );
};

export default class Menu {
  constructor(menu) {
    this._menu = menu;
    this._element = null;
  }

  getTemplate() {
    return createMenuTemplate(this._menu);
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
}
