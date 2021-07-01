const express = require('express');
const router = express.Router();

// Create type (article, webinar, course)
// Update type
// Delete type

router.post('/', async (req, res) => {
    console.log("Create Type")

    console.log(req.body);

    return res.status(204).end();
});

router.put('/', async (req, res) => {
    console.log("Update Type")

    console.log(req.body);

    return res.status(204).end();
});

router.delete('/', async (req, res) => {
    console.log("Delete Type")

    return res.status(204).end();
});

module.exports = router;