const dotenv = require('dotenv');
const app = require('./app')
const {mongoose} =require('mongoose');

dotenv.config({
    path:'./.env'
});

//Database connection
mongoose.connect(process.env.MONGO_URL
//     ,{
//     useNewUrlParser:true,
//     useCreateIndex:true,
//     useUnifiedToplogy:true,
//     useFindAndModify:false
// }
)
.then(() => console.log('Database Connected'))
.catch((err) => console.log('Database not connected', err))

const port = 3000;
app.listen(port, ()=> console.log(`The server is running on port ${port}`))