const menuItems = [
  `Table`,
  `Stats`
];

const generateMenu = () => {
  return menuItems.map((it) => {
    return {
      item: it
    };
  });
};

export {generateMenu};
