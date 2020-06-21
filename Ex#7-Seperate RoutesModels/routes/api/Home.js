const express = require('express'); //3rd party module npm i express
// const path = require('path');
const {
    Router
} = require('express');
const router = Router();


router.get('/ho', (req, res) => {
    res.send("Wellcome to Home Taxila street no.29....")
});

module.exports = router;