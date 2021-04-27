const express = require("express");
const itemController = require("./controllers/item-controller");
const itemsController = require("./controllers/items-controller");

const router = express.Router();

router.get("/items", itemsController.getItems);
router.get("/items/:id", itemController.getItemData);

module.exports = router;
