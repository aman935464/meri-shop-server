import rateLimit from "express-rate-limit";

const limited = rateLimit({
  windowMs: 15 * 60 * 1000 ,
  max: 50
})

export default limited;