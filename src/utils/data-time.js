import moment from 'moment';

const formatDate = (date) => {
  return moment(date).format(`DD/MM/YY HH:mm`);
};

const formatTextDate = (date) => {
  return moment(date).format(`MMM DD`);
};

const formatTime = (date) => {
  return moment(date).format(`HH:mm`);
};

const specialTimeFormat = (value) => {
  return value <= 10 ? `0${value}` : String(value);
};

const getDuration = (start, end) => {
  const interval = moment.duration(end - start);
  const days = interval.days() > 0 ? `${specialTimeFormat(interval.days())}D` : ``;
  const hours = interval.hours() > 0 ? `${specialTimeFormat(interval.hours())}H` : ``;
  const minutes = `${specialTimeFormat(interval.hours())}M`;

  return `${days} ${hours} ${minutes}`;
};

export {
  formatDate,
  formatTextDate,
  formatTime,
  getDuration
};
