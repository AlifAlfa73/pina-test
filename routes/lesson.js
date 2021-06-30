const express = require('express');
const router = express.Router();


router.get('/', async (req, res) => {
    console.log("Lesson")
});

module.exports = router;