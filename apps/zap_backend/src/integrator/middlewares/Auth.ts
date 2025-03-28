import jwt from 'jsonwebtoken';

// Replace with your secret key
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

export function Auth(req, res, next) {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
     res.status(401).json({ message: 'Authorization token missing or malformed' });
     return;
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    //@ts-ignore
    req.userId = decoded.userId;

    next();
  } catch (err) {
     res.status(401).json({ message: 'Invalid or expired token' });
     return;
  }
}
