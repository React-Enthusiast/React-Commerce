var express = require('express');
var router = express.Router();
const Product = require('../models/product')
var path = require('path');


router.get('/:fetch', function (req, res) {
    let perPage = 4;
    let fetch = req.params.fetch * perPage;
    Product
        .find()
        .limit(perPage)
        .skip(fetch)
        .then(productData => {
            res.json({
                status: 'SUCCESS',
                productData
            })
        })
        .catch(err => {
            res.json({
                status: 'FAILED',
                message: 'Connection Error'
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
                message: 'Connection Error'
            })
        })
})

// add products
router.post('/', function (req, res) {
    let { id, title, description, brand, price, detail, colors, capacities } = req.body;
    // console.log(JSON.parse(colors));
    // console.log(JSON.parse(capacities));
    console.log('body api', req.body);
    console.log('files api', req.files);
    let { filename } = req.files
    let { name } = req.files.filename
    let flname = name.split(' ').join('-')
    console.log(flname);
    filename.mv(path.join(__dirname, '..', 'public', 'images', flname), err => {
        if (err) console.log(err);
        Product.create({
            id,
            title,
            description,
            brand,
            price,
            detail,
            ...(capacities && { capacities: JSON.parse(capacities) }),
            ...(colors && { colors: JSON.parse(colors) }),
            filename: '/images/' + flname
        }).then(productData => {
            res.json({
                status: 'SUCCESS',
                itemAdded: productData
            })
        }).catch(err => {
            res.json({
                status: 'FAILED',
                message: 'Connection Error'
            })
        })
    })
})

router.put('/:id', function (req, res) {
    let { vote, testimonials, rate } = req.body;
    let changedItem = {};
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
                message: 'Connection Error'
            })
        })
})

module.exports = router;