const createSortItem = (sort, isChecked) => {
  const {item} = sort;

  return (
    `<div class="trip-sort__item  trip-sort__item--${item}">
              <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${item}" ${isChecked ? `checked` : ``}>
              <label class="trip-sort__btn" for="sort-event">${item}</label>
    </div>`
  );
};

export const createSortTemplate = (sort) => {

  const sortItem = sort.map((it, i) => createSortItem(it, i === 0)).join(`\n`);
  return (
    `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
      <span class="trip-sort__item  trip-sort__item--day"></span>
        ${sortItem}
    </form>
    <ul class="trip-days">
            
    </ul>`
  );
};
