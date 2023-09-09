import express from "express";
import dotenv from "dotenv";
dotenv.config();
import blogRoutes from "./routes/blogRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
//middleware
app.use(cors({
    origin: ["https://mern-blog-frontend-theta.vercel.app"],
    methods: ['POST', 'GET'],
    credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/blog", blogRoutes);
app.use("api/blog", (req,res) =>{
    res.send("Api success")
})
const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.MONGOOSE_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connected to db and listening on PORT ${PORT}`);
        });
    })
    .catch(error => {
        console.log(error);
    });
export default app;
