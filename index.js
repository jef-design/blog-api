const express = require('express')
const dotenv = require('dotenv')
dotenv.config();
const blogRoutes = require("./routes/blogRoutes");
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();
//middleware

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: ["https://mern-blog-frontend-theta.vercel.app"],
    methods: ['POST', 'GET', 'DELETE','PATCH'],
    credentials: true
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

app.use("/api/blog", blogRoutes);

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
