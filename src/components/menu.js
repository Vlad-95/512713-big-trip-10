const createMenuItem = (menu) => {
  const {item} = menu;
  return (
    `<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${item}</a>`
  );
};

export const createMenuTemplate = (menu) => {
  const menuItem = menu.map((it, i) => createMenuItem(it, !i)).join(`\n`);
  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
       ${menuItem}
    </nav>`
  );
};
