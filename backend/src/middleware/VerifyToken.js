import jwt from "jsonwebtoken"


const verifyJWT = (req, res, next) => {
  const token = req.cookies
  if (!token) return res.status(401).json({ message: "Unauthorized" });

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token invalid" });
    req.user = decoded;
    console.log(decoded)
    console.log(req.user)
    console.log(err)
    next();
  });
};


export default verifyJWT
