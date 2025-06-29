
const jwt = require('jsonwebtoken');

const ensureAuthenticated = (req, res, next) => {
  console.log("ensureAuthenticated called");
  const authHeader = req.headers['authorization']; // Bearer <token>
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.sendStatus(401); // Unauthorized

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // Forbidden
    req.user = user; // Save user payload to request
    next();
  });
};

module.exports = ensureAuthenticated;
