import {Router} from 'express';
const property = require('../controllers/property.controller');
const router = Router();

//Routes go here
router.get('/:id', property.getProperty);


export default router;
