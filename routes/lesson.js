const express = require('express');
const router = express.Router();
const lessonRepo = require('../repositories/lesson');


//Create Lesson
router.post('/', async (req, res) => {
    try {
        const result = await lessonRepo.createLesson(req.body);
        res.json({ data: result });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

//Update Lesson
router.put('/:id', async (req, res) => {
    try {
        await lessonRepo.updateLesson(req.params.id, req.body);    
        return res.status(200).end();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

//Get All Lesson
// Sort Lesson (by title or date)
router.get('/', async (req, res) => {
    try {
        const result = await lessonRepo.getLessons(req.query);
        res.json({ data: result });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

//Get Lesson By Id
router.get('/:id', async (req, res) => {
    try {
        const result = await lessonRepo.getLessonById(req.params.id);    
        res.json({ data: result });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

router.delete('/:id', async (req, res) => {    
    try {
        await lessonRepo.deleteLesson(req.params.id);    
        return res.status(200).end();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

//Publish Lesson
router.post('/:id/publish', async (req, res) => {
    try {
        await lessonRepo.updateLesson(req.params.id, req.body);    
        return res.status(200).end();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

module.exports = router;