const ensureAuthorized = (...allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.user?.payload?.role;
    if (!userRole || !allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: 'Access denied. Insufficient permissions.' });
    }
    next();
  };
};
module.exports = ensureAuthorized;