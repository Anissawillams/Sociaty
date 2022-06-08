const express = require('express')

const app = express();

const cors = require('cors');

app.use = express();
require('dotenv').config();



const httpServer = require("http").createServer();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (reg, res) => {
    res.send('Messaging App')
})


Server.listen(PORT, ()=> {
    console.log(`Now listening on port: ${PORT}`)
});