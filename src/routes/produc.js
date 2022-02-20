const express = require('express')
const producRouter = express.Router()
const axios = require('axios')

// all Products
producRouter.get('', async(req, res) => {
    try {
        const producAPI = await axios.get(`'https://dummyjson.com/products'`)
        res.render('produc', { products : producAPI.json })
    } catch (err) {
        if(err.response) {
            res.render('produc', { products : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.request) {
            res.render('produc', { products : null })
            console.log(err.requiest)
        } else {
            res.render('produc', { products : null })
            console.error('Error', err.message)
        }
    } 
})

// single Product
producRouter.get('/:id', async(req, res) => {
    let articleID = req.params.id
// const respon = await fetch('https://dummyjson.com/products/1')
//     const data = await respon.json()
    try {
        const producAPI = await axios.get(`'https://dummyjson.com/products/${ articleID }'`)
        //  const producAPI = await axios.get(`'https://dummyjson.com/products/1'`)
        res.render('producSingle', { product : producAPI.json })
    } catch (err) {
        if(err.response) {
            res.render('producSingle', { product : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('producSingle', { product : null })
            console.log(err.requiest)
        } else {
            res.render('producSingle', { product : null })
            console.error('Error', err.message)
        }
    } 
})

// search Product
producRouter.post('', async(req, res) => {
    let search = req.body.search
    try {
        const producAPI = await axios.get(`https://dummyjson.com/products/search?q=${ search }'`)
        //const producAPI = await axios.get(`'https://dummyjson.com/products/search?q=Laptop'`)
        
        res.render('producSearch', { products : producAPI.json })
    } catch (err) {
        if(err.response) {
            res.render('producSearch', { products : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('producSearch', { products : null })
            console.log(err.requiest)
        } else {
            res.render('producSearch', { products : null })
            console.error('Error', err.message)
        }
    } 
})


module.exports = producRouter 
