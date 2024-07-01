import jwt from 'jsonwebtoken';

const generateToken = (userId, res) => {
  try {
    const token = jwt.sign({ userId }, process.env.SECRET_KEY, {
      expiresIn: '15d',
    });

    res.cookie('jwt', token, {
      maxAge: 1000 * 60 * 60 * 24 * 15, // 15 days
      httpOnly: true,
      sameSite: 'strict',
      secure: process.env.NODE_ENV === 'production', // Only use secure cookies in production
    });

    return token; // Optionally return the token if needed
  } catch (error) {
    console.error('Error generating token:', error);
    throw new Error('Token generation failed');
  }
};

export default generateToken;

