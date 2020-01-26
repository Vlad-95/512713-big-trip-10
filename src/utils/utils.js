const TimesValues = {
  DAYS_IN_WEEK: 7,
  HOURS_IN_DAY: 24,
  SECONDS_IN_MINUNTE: 3600,
  MSSECONDS_IN_SECOND: 1000
};

const RenderPosition = {
  AFTERBEGIN: `afterbegin`,
  AFTEREND: `afterend`,
  BEFOREEND: `beforeend`
};

const getRandomElement = (element) => {
  return element[Math.floor(Math.random() * element.length)];
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomBoolean = () => {
  return Math.random() > 0.5;
};

const getRandomDate = () => {
  return Date.now() + 1 + Math.floor(Math.random() * (TimesValues.DAYS_IN_WEEK * TimesValues.HOURS_IN_DAY * TimesValues.SECONDS_IN_MINUNTE * TimesValues.MSSECONDS_IN_SECOND));
};


const render = (container, element, place) => {
  switch (place) {
    case RenderPosition.AFTERBEGIN:
      container.prepend(element);
      break;
    case RenderPosition.AFTEREND:
      container.after(element);
      break;
    case RenderPosition.BEFOREEND:
      container.append(element);
      break;
    default:
      container.append(element);
      break;
  }
};

const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};

const replace = (newComponent, oldComponent) => {
  const parentElement = oldComponent.getElement().parentElement;
  const newElement = newComponent.getElement();
  const oldElement = oldComponent.getElement();

  const isExistElements = !!(parentElement && newElement && oldElement);

  if (isExistElements && parentElement.contains(oldElement)) {
    parentElement.replaceChild(newElement, oldElement);
  }
};

const remove = (component) => {
  component.getElement().remove();
  component.removeElement();
};

export {
  RenderPosition,
  createElement,
  render,
  replace,
  remove,
  getRandomElement,
  getRandomNumber,
  getRandomDate,
  getRandomBoolean,
};
