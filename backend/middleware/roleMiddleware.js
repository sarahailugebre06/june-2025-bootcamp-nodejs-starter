// // middleware/role.js
// export const authorizeRoles = (...allowedRoles) => {
//   return (req, res, next) => {
//     if (!req.user || !allowedRoles.includes(req.user.role)) {
//       return res.status(403).json({ message: "Forbidden: You don’t have permission." });
//     }
//     next();
//   };
// };
// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// module.exports = (req, res, next) => {
//   const token = req.headers['authorization'];
//   if (!token) return res.status(401).json({ error: 'No token provided' });

//   jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
//     if (err) return res.status(401).json({ error: 'Invalid token' });
//     req.user = decoded; // store id and role in req.user
//     next();
//   });
// };
// middleware/auth.js
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'secretkey';

// Auth middleware
const authMiddleware = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token.split(' ')[1], JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.user = decoded; // { id, role }
    next();
  });
};

// Role-based authorization middleware
const authorizeRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Forbidden: You don’t have permission.' });
    }
    next();
  };
};

module.exports = { authMiddleware, authorizeRoles };
