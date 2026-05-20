import cookieParser from "cookie-parser";
import helmet from "helmet"
import cors from "cors";
import express from "express";
import limited from "./src/middleware/ratelimit.middleware.js"
import userRouter from "./src/routes/auth.routes.js"
const app = express();
app.set("trust proxy", 1);
app.use(cors({
  origin: ["https://meri-shop-eight.vercel.app","http://localhost:5173"],
  methods: ["GET","POST","PUT","DELETE"],
  credentials: true,
}))
app.use(express.json());
app.use(cookieParser())
app.use(helmet())
app.use(express.urlencoded({ extended: true }));
app.use(limited)
app.use("/api/auth",userRouter);

app.get("/", (req, res) => {
  res.send("hello world!!!!!!");
})


export default app