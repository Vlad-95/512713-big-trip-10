import {getRandomElement} from '../utils/utils.js';
import {getRandomNumber} from '../utils/utils.js';
import {getRandomDate} from '../utils/utils.js';
import {getRandomBoolean} from '../utils/utils.js';

const MaxValues = {
  MAX_PRICE: 2000,
  MAX_PICTURE: 5,
  MAX_EXTRA: 2,
  TRIP_COUNT: 3
};

const types = [
  `bus`,
  `check-in`,
  `drive`,
  `flight`,
  `restaurant`,
  `ship`,
  `sightseeing`,
  `taxi`,
  `train`,
  `transport`,
  `trip`
];

const cities = [
  `Amsterdam`,
  `Geneva`,
  `London`
];

const travelDescriptions = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`,
  `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`,
  `In rutrum ac purus sit amet tempus.`
];

const extraOffers = [
  {
    type: `luggage`,
    title: `Add luggage`,
    price: 10
  },
  {
    type: `comfort`,
    title: `Switch to comfort`,
    price: 9
  },
  {
    type: `meal`,
    title: `Add meal`,
    price: 150
  },
  {
    type: `seats`,
    title: `Choose seats`,
    price: 2
  }
];

const getRandomPhoto = () => `http://picsum.photos/300/150?r=${Math.random()}`;

const fillPhotos = (count) => {
  return new Array(count)
    .fill(``)
    .map(getRandomPhoto);
};

const generateRandomDescription = () => {
  let newDescription = [];

  for (let i = 0; i < getRandomNumber(1, 3); i++) {
    newDescription.push(getRandomElement(travelDescriptions));
  }

  return newDescription.join(` `);
};

const generateTravelCard = () => {
  let firstValue = getRandomDate();
  let secondValue = getRandomDate();

  return {
    type: getRandomElement(types),
    city: getRandomElement(cities),
    img: fillPhotos(MaxValues.MAX_PICTURE),
    description: generateRandomDescription(),
    startDate: Math.min(firstValue, secondValue),
    endDate: Math.max(firstValue, secondValue),
    startTime: Math.min(firstValue, secondValue),
    endTime: Math.max(firstValue, secondValue),
    price: getRandomNumber(0, MaxValues.MAX_PRICE),
    extra: extraOffers
  };
};

const generateTravelCards = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTravelCard);
};

const tripCard = generateTravelCard();

const tripCards = generateTravelCards(MaxValues.TRIP_COUNT);

const getTotalPrice = () => {
  let totalPrice = 0;
  for (let i = 0; i < tripCards.length; i++) {
    totalPrice += tripCards[i].price;
  }

  return totalPrice;
};

export {
  generateTravelCard,
  generateTravelCards,
  fillPhotos,
  tripCard,
  tripCards,
  extraOffers,
  MaxValues,
  getTotalPrice,
  getRandomNumber
};
