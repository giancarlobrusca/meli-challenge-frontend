const fetch = require("node-fetch");
const config = require("../config");

exports.getItems = (req, res) => {
  const query = req.query.q;

  fetch(`${config.apiMeli}/sites/MLA/search?q=${query}&limit=4`)
    .then((response) => response.json())
    .then((data) => {
      const objectReturn = {
        author: {
          name: "Giancarlo",
          lastname: "Brusca",
        },
        categories: [],
        items: data.results.map((item) => ({
          id: item.id,
          title: item.title,
          price: {
            currency: item.prices.presentation.display_currency,
            amount: item.price,
            decimals: 0,
          },
          picture: item.thumbnail,
          condition: item.condition,
          free_shipping: item.shipping.free_shipping,
          state: item.address.state_name,
        })),
      };

      const filtersPath = data.filters[0]?.values[0].path_from_root;

      if (filtersPath) {
        filtersPath.forEach((category) =>
          objectReturn.categories.push(category.name)
        );
      }

      res.status(200).json(objectReturn);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};
