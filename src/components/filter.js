const createFilterItem = (filter, isChecked) => {
  const {item} = filter;

  return (
    `<div class="trip-filters__filter">
        <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" ${isChecked ? `checked` : ``} >
        <label class="trip-filters__filter-label" for="filter-everything">${item}</label>
    </div>`
  );
};

// создаем шаблон фильтра
export const createFilterTemplate = (filters) => {
  const filtersItem = filters.map((it, i) => createFilterItem(it, !i)).join(`\n`);

  return (
    `<form class="trip-filters" action="#" method="get">
      ${filtersItem}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`
  );
};
