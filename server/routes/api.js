const express = require('express');
const casual = require('casual');
const Api = require('../models/Api');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, async (req, res) => {
    const userApis = await Api.find({ user: req.user._id });

    res.json({ apis: userApis });
});

router.post('/', authMiddleware, async (req, res) => {
    const { name, responseStructure, numRecords } = req.body;

    const api = new Api({ name, responseStructure, numRecords, user: req.user._id });
    await api.save();

    res.json({ message: 'API created successfully' });
});

router.get('/:apiName', async (req, res) => {
    const api = await Api.findOne({ name: req.params.apiName });

    if (!api) {
        return res.status(404).json({ message: 'API not found' });
    }

    const data = Array.from({ length: api.numRecords }).map(() => {
        return api.responseStructure.reduce((obj, field) => {
            obj[field.key] = casual[field.type](); // assuming 'field.type' matches a method on 'casual'
            return obj;
        }, {});
    });

    res.json(data);
});

module.exports = router;
