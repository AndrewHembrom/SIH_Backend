import express from 'express';
import dontenv from "dotenv";
import { connectDb } from './database/db.js';
import cors from "cors";

dontenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT;

app.get('/', (req, res) => { 
    res.send("Server is working");
})

import userRoutes from "./routes/user.js"
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

app.use('/api', userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

app.listen(5000, () => { 
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
})