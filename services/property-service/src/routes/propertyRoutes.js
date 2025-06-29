const express = require('express');
const router = express.Router();
//const upload = require('../../../../shared/middlewares/contentTypeHandler');
const upload = require('@mini-zillow/shared/middlewares/contentTypeHandler');
const {create, getAll, getById, update, remove} = require('../controllers/propertyController');


const ensureAuthenticated = require('@mini-zillow/shared/middlewares/ensureAuthenticated');
const  ensureAuthorized = require('@mini-zillow/shared/middlewares/ensureAuthorized');


router.post('/',ensureAuthenticated, upload.single('file'), create);
router.get('/', getAll);
router.get('/:id', ensureAuthenticated,getById);
router.put('/:id', update);
router.delete('/:id',ensureAuthenticated,ensureAuthorized('admin'), remove);

module.exports = router;
