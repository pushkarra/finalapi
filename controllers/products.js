const Product = require("../models/schema");

const getAllProducts = async (req, res) => {
    const { ide, name, category, subcategory, featured, sort, select, page, limit } = req.query;

    // Initialize query objects for each criterion
    const queryObject = {};

    if (category) {
        queryObject.category = { $regex: category, $options: "i" };
    }

    if (subcategory) {
        queryObject.subcategory = { $regex: subcategory, $options: "i" };
    }

    if (featured) {
        queryObject.featured = featured;
    }

    if (ide) {
        // const ideQuery = { id: { $regex: ide, $options: "i" } };
        // const ideProducts = await Product.find(ideQuery).lean();
        // return res.status(200).json(ideProducts);
        queryObject.id = ide;
    }

    if (name) {
        const nameQuery = { name: { $regex: name, $options: "i" } };
        const nameProducts = await Product.find(nameQuery).lean();
        return res.status(200).json(nameProducts);
    }

    let apiData = Product.find(queryObject);

    if (sort) {
        const sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }

    if (select) {
        const selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    // Pagination
    // const pageInt = parseInt(page) || 1;
    // const limitInt = parseInt(limit) || 10;
    // const skip = (pageInt - 1) * limitInt;

    // apiData = apiData.skip(skip).limit(limitInt).lean();

    const Products = await apiData;

    res.status(200).json(Products);
};

const getAllProductsTesting = async(req,res) => {

    const Products = await Product.find(req.query).lean();
    res.status(200).json(Products );
    
};

module.exports = { getAllProducts, getAllProductsTesting };