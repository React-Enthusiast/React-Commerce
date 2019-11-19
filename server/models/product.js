var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productSchema = new Schema({
    id: { type: Number, default: Date.now() },
    title: { type: String, required: true },
    description: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    detail: { type: String, required: true },
    vote: { type: Number, default: 0 },
    testimonials: [{}], // {id, name, rate, message}
    rate: { type: Number, default: 0 },
    colors: { type: [String], required: true },
    capacities: { type: [String], required: true },
    filename: String
});

module.exports = mongoose.model('Product', productSchema);