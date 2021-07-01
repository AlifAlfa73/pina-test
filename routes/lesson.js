const express = require('express');
const router = express.Router();


//Create Lesson
router.post('/', async (req, res) => {
    console.log(req.body);
    
    console.log("Create Lesson");

    return res.status(204).end();
});

//Update Lesson
router.put('/', async (req, res) => {
    console.log(req.body);
    
    console.log("Update Lesson");

    return res.status(204).end();
});

//Get All Lesson
// Sort Lesson (by title or date)
router.get('/', async (req, res) => {
    console.log(req.query);

    console.log("Get Lesson");

    return res.status(204).end();
});

//Get Lesson By Id
router.get('/:id', async (req, res) => {
    console.log(req.params);

    console.log("Get Lesson");

    return res.status(204).end();
});

router.delete('/', async (req, res) => {    
    console.log("Delete Lesson");

    return res.status(204).end();
});

//Create Lesson
router.post('/publish', async (req, res) => {
    console.log(req.body);
    
    console.log("Publish Lesson");

    return res.status(204).end();
});

module.exports = router;