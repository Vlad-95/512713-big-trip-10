const FilterItems = [
  `Everything`,
  `Future`,
  `Past`
];

const generateFilters = () => {
  return FilterItems.map((it) => {
    return {
      item: it
    };
  });
};

export {generateFilters};
