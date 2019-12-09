const itemType = [
    {
        name: `Bus`,
        pic: `img/icons/bus.png`
    },
    {
        name: `Check`,
        pic: `img/icons/check-in.png`
    },
    {
        name: `Drive`,
        pic: `img/icons/drive.png`
    },
    {
        name: `Flight`,
        pic: `img/icons/flight.png`
    },
    {
        name: `Restaurant`,
        pic: `img/icons/restaurant.png`
    },
    {
        name: `Ship`,
        pic: `img/icons/ship.png`
    },
    {
        name: `Sightseeing`,
        pic: `img/icons/sightseeing.png`
    },
    {
        name: `Taxi`,
        pic: `img/icons/taxi.png`
    },

    {
        name: `Train`,
        pic: `img/icons/train.png`
    },

    {
        name: `Transport`,
        pic: `img/icons/transport.png`
    }
];

const ItemPlace = [
  `Airport`,
  `London`,
  `Hotel`,
  `Paris`,
  `New-York`,
];

const ItemDescriprion = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`,
  `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
];

const ItemTimeBegin = [
  `09:00`,
  `10:00`,
  `11:30`,
  `12:30`,
  `13:45`,
];

const ItemTimeEnd = [
  `21:00`,
  `22:00`,
  `23:30`,
  `00:30`,
  `01:45`,
];


// получение рандомного элемента из массива
const getRandomArrayItem = (array) => {
  const randomIndex = getRandomIntegerNumber(0, array.length);
};

// получение рандомного целого числа
const getRandomIntegerNumber = (min, max) => {
  return min + Math.floor(max * Math.random());
};

// генерация элемента
const generateItem = () => {
    return itemType.map((it) => {
        return {
            type: getRandomArrayItem(itemType)
        };

    });
};



const generateItems = (count) => {
    return new Array(count).fill('').map(generateItem);
};

export {generateItem, generateItems};
