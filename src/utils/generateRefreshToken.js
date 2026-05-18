import jwt from 'jsonwebtoken';
const generateRefreshToken = (id) => {
  return jwt.sign(
    {
      id
    },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
  )
}

export default generateRefreshToken;