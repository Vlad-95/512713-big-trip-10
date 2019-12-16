import {monthNames} from '../const.js';

const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const SECONDS_IN_MINUNTE = 3600;
const MSSECONDS_IN_SECOND = 1000;

const getRandomElement = (element) => {
  return element[Math.floor(Math.random() * element.length)];
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomDate = () => {
  return Date.now() + 1 + Math.floor(Math.random() * (DAYS_IN_WEEK * HOURS_IN_DAY * SECONDS_IN_MINUNTE * MSSECONDS_IN_SECOND));
};

const formatDate = (date) => {
  const formattingDate = new Date(date);

  const day = formattingDate.getDate();
  const month = formattingDate.getMonth();
  const year = formattingDate.getFullYear();

  return `${day}/${month + 1}/${year}`;
};

const formatTextDate = (date) => {
  const textdate = new Date(date);

  const day = textdate.getDate();
  const month = textdate.getMonth();

  return `${monthNames[month]} ${day}`;
};

const formatTime = (date) => {
  const formattingTime = new Date(date);

  const hours = formattingTime.getHours();
  const minutes = formattingTime.getMinutes();

  return `${hours}:${minutes}`;
};

export {
  getRandomElement,
  getRandomNumber,
  getRandomDate,
  formatDate,
  formatTextDate,
  formatTime
};
