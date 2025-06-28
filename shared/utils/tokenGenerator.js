const jwt = require('jsonwebtoken');    

const tokenGenerator = (payload) => {
  return jwt.sign(
    { email: payload?.email, name: payload?.name },  
    process.env.JWT_SECRET,
    {
      expiresIn: "15m", 
      algorithm: "HS256", 
    }
  );
};

module.exports = tokenGenerator;