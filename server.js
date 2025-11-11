import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRouter from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import authRouter from "./router/authRouter.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: ["http://localhost:3000", "https://startech-two.vercel.app"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/users", userRouter);
app.use('/auth', authRouter);

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Server running on port ${port}`));
