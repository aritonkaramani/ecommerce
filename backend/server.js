require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');



const app = express();

app.use(express.json());

app.use('/api/products', productRoutes)

var PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

connectDB();