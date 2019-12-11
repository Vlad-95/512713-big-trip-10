const SortItems = [
  `event`,
  `time`,
  `price`,
  `offers`,
];

const generateSort = () => {
  return SortItems.map((it) => {
    return {
      item: it
    };
  });
};

export {generateSort};
