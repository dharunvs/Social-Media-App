const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());2 
app.use(express.json());

const userRoute = require('./routes/User');
app.use('/user', userRoute);

app.listen(3001, (req, res) => {
    console.log("Server is running...");
})  