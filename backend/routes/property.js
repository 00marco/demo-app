import {Router} from 'express';
const property = require('../controllers/property.controller');
const router = Router();

router.get('/createProperty', property.createProperty);
router.get('/:id', property.getProperty);


export default router;
