import express from "express";
import bodyParser from 'body-parser';
import statusRoute from './routers/status.js'

const dburl = "mongodb://Covidcambodia:1234@cluster0-shard-00-00.n9tvb.mongodb.net:27017,cluster0-shard-00-01.n9tvb.mongodb.net:27017,cluster0-shard-00-02.n9tvb.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-ihotfn-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology:true
};
mongoose
    .connect(dburl, connectionParams)
    .then(() => {
        console.info("Connected to the db");
    })
    .catch((e) => {
        console.log("Error", e)
    })
const channelSchema = require('./models/channel');
const mongoose = require('mongoose');
const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/status',statusRoute );
app.get('/', (req,res) => res.send('Hello From Hompage.'))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))