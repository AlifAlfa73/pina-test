const express = require('express');
const router = express.Router();
const typeRepo = require('../repositories/type');

// Create type (article, webinar, course)
router.post('/', async (req, res) => {
    try {
        const result = await typeRepo.createType(req.body);
        res.json({ data: result });
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

// Update type
router.put('/:id', async (req, res) => {
    try {
        await typeRepo.updateType(req.params.id, req.body);    
        return res.status(200).end();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});


// Delete type
router.delete('/:id', async (req, res) => {
    try {
        await typeRepo.deleteType(req.params.id);    
        return res.status(200).end();
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
});

module.exports = router;