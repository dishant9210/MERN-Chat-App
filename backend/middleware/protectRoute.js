import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt; // getting a hold of the cookie which we created previously

    if (!token) {
      return res.status(401).json({ error: 'Unauthorized - No token provided' });
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded) {
      return res.status(401).json({ error: 'Unauthorized - Invalid token provided' });
    }

    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' }); // Use 404 for not found
    }

    req.user = user;
    next(); // calling the sendMessage function 
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Unauthorized - Invalid token provided' });
    }
    console.log('Error in the protectRoute middleware', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export default protectRoute;
