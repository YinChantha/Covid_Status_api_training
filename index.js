import express from "express";
import bodyParser from 'body-parser';
import statusRoute from './routers/status.js'


const app = express();
const PORT = 4000;

app.use(bodyParser.json());

app.use('/status',statusRoute );
app.get('/', (req,res) => res.send('Hello From Hompage.'))
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))