import jwt from 'jsonwebtoken';


const generateAccessToken = (id) => {
  return jwt.sign(
    {id},
    process.env.ACCESS_TOKEN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
  )
}

export default generateAccessToken