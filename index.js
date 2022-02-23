import fetch from 'node-fetch';
import express from 'express';
const server = express();



// const express = require('express');
// const server = express();
server.set('view engine', 'ejs');

server.use(express.static('public'));

// Search
server.get(['/search', 'products/search'], async (req, response) => {
    if(req.query.hasOwnProperty('q')){
        let results = await fetch('https://dummyjson.com/products/search?q='+req.query.q)
                            .then(res => res.json())
                            .then(res => response.render('products', { products: res.products, categories: null }));
    }
        
});

server.get('/:prod_id([0-9]{0,10})', async (req, response) => {
    let categories = await fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(res => res.slice(0, 9));
    if(req.params.prod_id) {
        fetch('https://dummyjson.com/products/'+req.params.prod_id)
        .then(res => res.json())
        .then(res => response.render('product', { product: res, categories: categories }));
    }
    else{
        fetch('https://dummyjson.com/products/')
        .then(res => res.json())
        .then(res => response.render('products', { products: res.products, categories: categories }));
    }
});

server.get(['/:category'], async (req, response) => {
    let categories = await fetch('https://dummyjson.com/products/categories').then(res => res.json()).then(res => res.slice(0, 9));
    fetch('https://dummyjson.com/products/category/'+req.params.category)
        .then(res => res.json())
        .then(res => response.render('products', { products: res.products, categories: categories, currentCate: req.params.category }));     
});


server.get('/', (_, res) => {
    res.status(200).render('products');
});


server.get('/products', (_, res) => {
    res.status(200).render('products');
});

server.get('/about', (_, res) => {
    res.render('about');
});

server.get('/contact', (_, res) => {
    res.render('connect');
});

server.get('/product', (_, res) => {
    res.render('product');
});
server.get('/cart', (_, res) => {
    res.render('cart');
});
server.get('/login', (_, res) => {
    res.render('login');
});
server.get('/register', (_, res) => {
    res.render('register');
});




server.use((_, res) => {
    res.render('404', { title: 'Error : Not Found' });
});

const port=process.env.PORT || 44000
server.listen(port, () => {
    console.log('Server running at http://127.0.0.1:44000');
})

