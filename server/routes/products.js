var express = require('express');
var router = express.Router();
const Product = require('../models/product')

router.get('/:fetch', function (req, res) {
    let perPage = 4;
    let fetch = req.params.fetch;
    Product.find()
    .limit(perPage)
    .skip(perPage * fetch)
    .then(productData => {
        res.json({
            status: 'SUCCESS',
            productData
        })
    }).catch(err => {
        res.json({
            status: 'FAILED',
            message: err
        })
    })
})

router.post('/', function (req, res) {
    let { id, title, description, brand, price, detail, colors, capacities } = req.body;
    Product.create({ id, title, description, brand, price, detail, colors, capacities })
        .then(productData => {
            res.json({
                status: 'SUCCESS',
                productData
            })
        }).catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})

router.put('/:id', function (req, res) {
    let { vote, testimonials, rate } = req.body;
    let changedItem = {};
    vote ? changedItem.vote = vote : '';
    testimonials ? changedItem.testimonials = testimonials : '';
    rate ? changedItem.rate = rate : '';

    Product.findOneAndUpdate({ id: Number(req.params.id) }, changedItem)
        .then(item => {
            vote ? item.vote = vote : '';
            testimonials ? item.testimonials = testimonials : '';
            rate ? item.rate = rate : '';
            res.json({
                status: 'SUCCESS',
                productData: item,
            })
        }).catch(err => {
            res.json({
                status: 'FAILED',
                message: err
            })
        })
})


