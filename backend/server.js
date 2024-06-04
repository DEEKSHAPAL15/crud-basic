const express = require('express');
const connectDB = require('./config/db_config');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000 ;

// DataBase CONNECTION

connectDB();

// Body-Parsar or Middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Default Route

app.get ('/', (req, res)=>{ 
    res.json({msg : 'Welcome to Crud API 1.0'})
});

app.post('/products',(req, res) =>{
    res.send('Products Here!!')
});

app.put('/products',(req, res) =>{
    res.send(' Update Products Here!!')
}); 

app.use('/api/user', require('./routes/UserRoutes'));

app.listen(PORT , ()=>{
    console.log(`Server is running at PORT : ${PORT}`)
});