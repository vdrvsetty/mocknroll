require('dotenv').config();
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const SECRET_KEY = process.env.SECRET_KEY;

module.exports = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const payload = jwt.verify(token, SECRET_KEY);

        req.user = await User.findById(payload.id);

        next();
    } catch (e) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};s
