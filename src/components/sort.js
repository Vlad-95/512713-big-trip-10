import {createElement} from '../utils/utils.js';

const createSortItem = (sort, isChecked) => {
  const {item} = sort;
  return (
    `<div class="trip-sort__item  trip-sort__item--${item}">
       <input id="sort-${item}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}" ${isChecked ? `checked` : ``}>
       <label class="trip-sort__btn" for="sort-${item}">${item}</label>
    </div>`
  );
};

const createSortTemplate = (sort) => {
  const sortItem = sort.map((it, i) => createSortItem(it, !i)).join(`\n`);
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day"></span>
        ${sortItem}
    </form>
    <ul class="trip-days">
    </ul>`
  );
};

export default class Sort {
  constructor(sort) {
    this._sort = sort;
    this._element = null;
  }

  getTemplate() {
    return createSortTemplate(this._sort);
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
