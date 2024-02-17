const express = require('express')
const Bookmark = require('../models/bookmark')

const router = express.Router();


// INDEX ROUTE
router.get('/', async (req, res) => {
    try{
        res.json(await Bookmark.find({}))
        // res.send("Index Page")
    }catch(error){
        console.log('Read the error message', error)
    }
})


// CREATE ROUTE
router.post('/', async (req, res) => {
    try{
        res.json(await Bookmark.create(req.body))
        // res.send("Create Page")
    }catch(error){
        console.log('Read the error message', error)
    }
})


// DELETE ROUTE
router.delete('/:id', async (req, res) => {
    try{
        res.json(await Bookmark.findByIdAndDelete(req.params.id))
        // res.send("Delete Page")
    }catch(error){
        console.log('Read the error message', error)
    }
})

//FIND THE ID AND SEARCH IN THUNDERCLIENT/POSTMAN
router.get('/:id', async (req, res) => {
    try {
        res.json(await Bookmark.findById(req.params.id))
    } catch (error) {
        console.log('Read the error message', error)
    }
})


// UPDATE ROUTE
router.put('/:id', async (req, res) => {
    try{
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body))
        // res.send("Update Page")
    }catch(error){
        console.log('Read the error message', error)
    }
})


module.exports = router;