import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {

  try {
    const token = req.cookies.refreshToken;
    if(!token){
      return res.status(401).json({
        success: false,
        message: "Unauthorized"
      })
    }
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN);
    req.user = decoded;
    next();
    
  } catch (error) {
    return res.status(401).json({
        success: false,
        message: "Invalid token"
    })
    
  }

}