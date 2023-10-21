const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({

    id:{
        type: String,
        required: true,
        unique: true,
    },

    name: {
        required: true,
        type: String,
    },
    category: {
        required: true,
        type: String,
    },
    image: {
        type: String,
        required: true,
    },
    imageie: {
        type: String,
        required: true,
    },
    power:{
        type: [String],
        required:false,
    },
    
    lumen: {
        type: [String],
        required: false,
    },
    size: {
        required: false,
        type: [String],
    },
    colors: {
        type: [String],
        required: false,
    },
    features: {
        type: [String],
        required: false,
    },
    featured: {
        type: Boolean,
        default: false,
    },


    voltage1: {
        type: String,
    },
    voltage2: {
        type: String,
    },
    current: {
        type: String,
    },
    pf: {
        type: String,
    },
    surge: {
        type: String,
    },
    typeo: {
        type: String,
    },
    dimension: {
        type: String,
    },
    color:{
        type: String,
    },
    subcategory:{
        type: String,
    },
    lengthy: {
        required: false,
        type: [String],
    },
    source: {
        type: [String],
    }
});



module.exports = mongoose.model('Product',productSchema)
