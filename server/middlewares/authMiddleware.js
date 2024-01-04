const jwt = require('jsonwebtoken');
const keys = require('../configs/keys');

// Authentication Middleware
exports.authenticateUser = (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  try {
    const decoded = jwt.verify(token, keys.jwtSecret);
    req.user = decoded; 
    next();
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({ message: 'Token expired' });
    }
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};

exports.authenticateAdmin = (req, res, next) => { 
  const token = req.header('Authorization'); 
  if (!token) {
    return res.status(401).json({ message: 'Access denied, token missing' });
  }

  try {
    const decoded = jwt.verify(token.replace('Bearer ', ''), keys.jwtSecret);
    const { role } = decoded;

    if (role !== 'admin') {
      return res.status(403).json({ message: 'Access denied, not authorized as admin' });
    }

    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token' });
  }
};


// Authorization Middleware
exports.authorizeUser = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'user') {
    return res.status(403).json({ message: 'Access denied, not authorized' });
  }

  next();
};

exports.authorizeAdmin = (req, res, next) => {
  const { role } = req.user;

  if (role !== 'admin') {
    return res.status(403).json({ message: 'Access denied, not authorized as admin' });
  }

  next();
};
