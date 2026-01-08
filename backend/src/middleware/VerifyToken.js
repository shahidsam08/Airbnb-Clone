import jwt from "jsonwebtoken"

 const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Format: Bearer TOKEN
  if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded; // attach user info
    next(); // allow access
  } catch (err) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

 export default verifyToken

