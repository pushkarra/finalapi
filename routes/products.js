const express = require('express');
const router = express.Router();

const {getAllProducts, getAllProductsTesting,  getProductById} =  require("../controllers/products");

router.route('/').get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.route('/:id').get(getProductById); // New route for fetching a product by ID

module.exports = router;
