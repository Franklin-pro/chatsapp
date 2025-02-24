import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
import { app,server } from './routes/socket/socket.js';
import path from 'path';

// const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000
const DATABASE = process.env.DATABASE

const __dirname = path.resolve()
app.use(cookieParser())

app.use(express.json())
app.use("/api/v1", router)

app.use(express.static(path.join(__dirname, "/frontend/dist")))
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

mongoose.connect(DATABASE).then(() => {
    console.log('Database connected')
}).catch((err) => {
    console.log(err)
})

