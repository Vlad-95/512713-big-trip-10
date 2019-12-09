const MenuItems = [
    `Table`,
    `Stats`
];

const generateMenu = () => {
    return MenuItems.map((it) => {
        return {
            item: it
        };
    });
};


export {generateMenu};
