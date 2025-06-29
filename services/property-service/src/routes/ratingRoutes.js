const express = require('express');
const router = express.Router();
const {postRating,getRating} = require('../controllers/ratingController');

const ensureAuthenticated = require('@mini-zillow/shared/middlewares/ensureAuthenticated');
const  ensureAuthorized = require('@mini-zillow/shared/middlewares/ensureAuthorized');

router.post('/', postRating); 
router.get('/:propertId', getRating);
//router.delete('/:id',ensureAuthenticated,ensureAuthorized('admin'), remove);

module.exports = router;
