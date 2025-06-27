const multer = require('multer');

const storage = multer.memoryStorage();

const contentTypeHandler = multer({ storage }); 
module.exports = contentTypeHandler;
