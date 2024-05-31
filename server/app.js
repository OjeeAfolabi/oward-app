const express=require('express');
const routes = require('./routes/authRoutes');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');


const corsOption ={
    origin:"http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders:"Content-Type,Authorization",
    "Access-Control-Allow-Credentials": true,
    credentials: true,
    optionSuccessStatus: 204
};

// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use(cookieParser());

app.use('/api/v1/oward', routes)



module.exports=app