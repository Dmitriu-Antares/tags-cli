import express from 'express';
import data from '../models/all'

const router = express.Router();

router.get('/', (req, res) => {
    const err = null
    res.json({err, data})
})

export default router