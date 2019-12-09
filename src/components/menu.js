import {generateMenu} from "../mock/menu.js";

const createMenuMarkup = (menu) => {
  const {item} = menu;

  return (
      `<a class="trip-tabs__btn  trip-tabs__btn--active" href="#">${item}</a>`
  );
};

// создаем шаблон меню
export const createMenuTemplate = (menu) => {
  const menuMarkup = menu.map((it, i) => createMenuMarkup(it, i === 0)).join(`\n`);

  return (
    `<nav class="trip-controls__trip-tabs  trip-tabs">
      <!--<a class="trip-tabs__btn  trip-tabs__btn&#45;&#45;active" href="#">Table</a>
      <a class="trip-tabs__btn" href="#">Stats</a>-->
        ${menuMarkup}
    </nav>`
  );
};
