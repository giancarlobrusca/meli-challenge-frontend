const fetch = require("node-fetch");
const config = require("../config");

exports.getItems = (req, res) => {
  const query = req.query.q;

  fetch(`${config.apiMeli}/sites/MLA/search?q=${query}&limit=4`)
    .then((response) => response.json())
    .then((data) => {
      const filtersPath = data.filters[0]?.values[0].path_from_root;
      const categories = [];

      if (filtersPath) {
        filtersPath.forEach((category) => categories.push(category.name));
      }

      const objectReturn = {
        author: {
          name: "Giancarlo",
          lastname: "Brusca",
        },
        categories: categories,
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

      res.status(200).json(objectReturn);
    });
};
