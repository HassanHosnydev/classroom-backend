import express from "express";
import subjectRouter from "./routes/subjects.js";
const PORT = process.env.PORT || 3000;
import cors from 'cors'
const app = express();

if(!process.env.FRONTEND_UR){
    throw new Error('FRONTEND_URL is not set in .env file')
}

app.use(cors({
    origin : process.env.FRONTEND_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json());

app.use('/api/subjects' , subjectRouter)

app.get("/", (req, res)=>{
    res.send("Hello World");
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})