import express from "express";
import connectToMongo from "./config/db.js"
import cors from "cors";
import galleryRoutes from "./routes/gallery.js"

const app = express();

// API routes
app.use(cors());
app.use(express.json());

app.use("/api/v1", galleryRoutes)
app.use(express.static("public/upload"));
const PORT = 8000;



app.listen(PORT, ()=>{
    connectToMongo();
    console.log(`connected to port ${PORT}`)
})