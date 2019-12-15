const sortItems = [
  `event`,
  `time`,
  `price`,
  `offers`,
];

const generateSort = () => {
  return sortItems.map((it) => {
    return {
      item: it
    };
  });
};

export {generateSort};
