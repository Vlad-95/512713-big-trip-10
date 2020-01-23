import {createElement} from '../utils/utils.js';

const createFilterItem = (filter, isChecked) => {
  const {item} = filter;

  return (
    `<div class="trip-filters__filter">
        <input id="filter-${item}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${item}" ${isChecked ? `checked` : ``} >
        <label class="trip-filters__filter-label" for="filter-${item}">${item}</label>
    </div>`
  );
};

// создаем шаблон фильтра
const createFilterTemplate = (filters) => {
  const filtersItem = filters.map((it, i) => createFilterItem(it, !i)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersItem}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};

export default class Filter {
  constructor(filter) {
    this._filter = filter;
    this._element = null;
  }

  getTemplate() {
    return createFilterTemplate(this._filter);
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
