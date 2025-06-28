const express = require('express');
const router = express.Router();
//const upload = require('../../../../shared/middlewares/contentTypeHandler');
const upload = require('@mini-zillow/shared/middlewares/contentTypeHandler');
const {create, getAll, getById, update, remove} = require('../controllers/propertyController');

router.post('/', upload.single('file'), create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', remove);

module.exports = router;
