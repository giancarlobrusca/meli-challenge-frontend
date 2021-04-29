const fetch = require("node-fetch");
const config = require("../config");

exports.getItemData = async (req, res) => {
  const itemId = req.params.id;

  const itemResponse = await fetch(`${config.apiMeli}/items/${itemId}`);

  const itemDescription = await fetch(
    `${config.apiMeli}/items/${itemId}/description`
  );

  if (itemResponse.status === 200) {
    const data = await itemResponse.json();
    const description = await itemDescription.json();

    const itemCategories = await fetch(
      `${config.apiMeli}/categories/${data.category_id}`
    );

    const categories = await itemCategories.json();

    const objectReturn = {
      author: {
        name: "Giancarlo",
        lastname: "Brusca",
      },
      categories: [],
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: 2,
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: description.plain_text,
      },
    };

    const hasCategories = categories.path_from_root;

    if (hasCategories) {
      categories.path_from_root.forEach((category) => {
        objectReturn.categories.push(category.name);
      });
    }

    res.status(200).json(objectReturn);
  }
};
