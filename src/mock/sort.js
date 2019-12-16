const sortedItems = [
  `event`,
  `time`,
  `price`,
  `offers`,
];

const getSortedItems = () => {
  return sortedItems.map((it) => {
    return {
      item: it
    };
  });
};

export {getSortedItems};
