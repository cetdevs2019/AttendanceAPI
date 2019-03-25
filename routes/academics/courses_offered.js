const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(req.body)
});

router.post('/', (req, res) => {
    res.send(req.body)
});

router.put('/', (req, res) => {
    res.send(req.body)
});

module.exports = router;
