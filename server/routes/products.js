var express = require('express');
var router = express.Router();
const Product = require('../models/product')

router.get('/:fetch', function (req, res) {
    let perPage = 4;
    let fetch = req.params.fetch * perPage;
    Product
        .find()
        .limit(fetch)
        .then(productData => {
            res.json({
                status: 'SUCCESS',
                productData
            })
        })
        .catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})

router.get('/detail/:id', function (req, res) {
    Product
        .findOne({ _id: req.params.id })
        .then(productData => {
            res.json({
                status: 'SUCCESS',
                productData
            })
        })
        .catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})

router.post('/', function (req, res) {
    let { id, title, description, brand, price, detail, colors, capacities } = req.body;
    Product
        .create({ id, title, description, brand, price, detail, colors : JSON.parse(colors), capacities : JSON.parse(capacities) })
        .then(productData => {
            res.json({
                status: 'SUCCESS',
                productData
            })
        })
        .catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})

router.put('/:id', function (req, res) {
    let { vote, testimonials, rate } = req.body;
    vote ? changedItem.vote = vote : '';
    rate ? changedItem.rate = rate : '';
    testimonials ? changedItem.testimonials = JSON.parse(testimonials) : '';
    Product
        .findOneAndUpdate({ _id: req.params.id }, changedItem)
        .then(item => {
            vote ? item.vote = vote : '';
            rate ? item.rate = rate : '';
            testimonials ? item.testimonials = changedItem.testimonials : '';
            res.json({
                status: 'SUCCESS',
                productData: item,
            })
        })
        .catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})

module.exports = router;