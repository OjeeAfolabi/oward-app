const express=require('express');
const routes = require('./routes/authRoutes')
const app = express();


app.use(express.json())

app.use('/api/v1/oward', routes)


module.exports=app