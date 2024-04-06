import express from "express"
import { connectDb } from "./config/db.config"
import { config } from "dotenv"
import { authRouter, userRouter } from "./routers"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()

config()
connectDb()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: 'GET, POST, PUT, DELETE',
  credentials: true
}))

app.use("/auth", authRouter.router)
app.use("/user", userRouter.router)

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("Server Started running at the PORT:", PORT))

app.get("/", (req, res) => res.send("Server is running successfully"))