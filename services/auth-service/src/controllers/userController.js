const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    console.log('Creating new user');   
    const user = await userService.signUp(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  try {
    console.log('User login attempt');
    const user = await userService.signIn(req.body);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { register, login };