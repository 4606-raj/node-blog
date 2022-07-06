const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/Blog')
        .then(result => {
            console.log('connected to DB');

            app.listen(PORT, (err) => {
                if(err)
                    console.log(err);
            
                console.log(`Server is listening on port ${PORT}`);
            })
            
        })
        .catch(err => {
            console.log(err);
        });

require('./routes')(app);