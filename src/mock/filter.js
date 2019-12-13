const filters = [
  `Everything`,
  `Future`,
  `Past`
];

const generateFilters = () => {
  return filters.map((filter) => {
    return {
      item: filter
    };
  });
};

export {generateFilters};
