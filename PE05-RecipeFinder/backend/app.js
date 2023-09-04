const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const recipeRoutes = require('./routes/recipes');

const app = express();

mongoose.connect('your_mongodb_atlas_connection_string_here', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(express.json());
app.use('/api/recipes', recipeRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));
