const fetch = require("node-fetch");
const config = require("../config");

exports.getItemData = async (req, res) => {
  const itemId = req.params.id;

  const itemResponse = await fetch(`${config.apiMeli}/items/${itemId}`);

  const itemDescription = await fetch(
    `${config.apiMeli}/items/${itemId}/description`
  );

  if (itemResponse.status === 200) {
    data = await itemResponse.json();
    description = await itemDescription.json();

    const objectReturn = {
      author: {
        name: "Giancarlo",
        lastname: "Brusca",
      },
      item: {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: data.price,
          decimals: data.decimal_places,
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: description.plain_text,
      },
    };

    res.status(200).json(objectReturn);
  }
};
