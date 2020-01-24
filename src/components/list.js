
import AbstractComponent from "./abstract-component";

const cardsListTemplate = () => {
  return (
    `<ul class="trip-days"></ul>`
  );
};

export default class CardsList extends AbstractComponent {
  getTemplate() {
    return cardsListTemplate();
  }
}
