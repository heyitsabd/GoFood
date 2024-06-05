const express = require('express');
const app = express();
const PORT = 5000;
const mongoose = require('mongoose');
const creatuser = require('./Routes/createUser')
const cors = require('cors'); 

app.use(cors({
    origin: 'http://localhost:3000', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, 
    optionsSuccessStatus: 200 
}));

app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/goFoodMERN', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB connected successfully');

        const fetch_data = mongoose.connection.db.collection('foodItems');
        fetch_data.find({}).toArray()
            // .then(data => {
            //     console.log('Fetched food items:', data); 
            // })
            // .catch(err => {
            //     console.error('Error fetching food items:', err);
            // });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB:', err);
    });

app.use('/api',creatuser)

app.get('/',async(req,res)=>{
    console.log('Hello world')
})

app.listen(PORT,()=>{
    console.log(`app is running at port number ${PORT}`)
})