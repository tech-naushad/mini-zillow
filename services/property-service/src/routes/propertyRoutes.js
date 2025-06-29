const express = require('express');
const router = express.Router();
const upload = require('@mini-zillow/shared/middlewares/contentTypeHandler');
const {create, getAll, getById, update, remove, getMyListing} = require('../controllers/propertyController');


const ensureAuthenticated = require('@mini-zillow/shared/middlewares/ensureAuthenticated');
const  ensureAuthorized = require('@mini-zillow/shared/middlewares/ensureAuthorized');

router.get('/myListing', ensureAuthenticated,getMyListing);
router.post('/',ensureAuthenticated, upload.single('file'), create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id',ensureAuthenticated,ensureAuthorized('admin'), remove);


module.exports = router;
