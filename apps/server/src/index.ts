import express from "express"
import { connectDb } from "./config/db.config"
import { config } from "dotenv"

const app = express()

config()
connectDb()

app.use(express.json())

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log("Server Started running at the PORT:", PORT))

app.get("/", (req, res) => res.send("Server is running successfully"))