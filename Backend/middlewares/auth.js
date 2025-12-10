const jwt = require('jsonwebtoken');

/**
 * Simple JWT authentication middleware for admin routes
 * For production, implement proper user authentication
 */
function authenticateAdmin(req, res, next) {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      return res.status(401).json({ message: 'Authentication required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid or expired token' });
  }
}

/**
 * Generate admin token (for demo purposes)
 * In production, implement proper login flow
 */
function generateAdminToken() {
  return jwt.sign(
    { admin: true, timestamp: Date.now() },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
}

module.exports = { authenticateAdmin, generateAdminToken };
