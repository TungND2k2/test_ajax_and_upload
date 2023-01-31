import express from "express";

import bodyParser from "body-parser";
const app = express();
const port = 3000;
import cors from 'cors'
import {AppDataSource} from "./src/data-source";
import router from "./src/router/router";


AppDataSource.initialize().then(() => {
    console.log('Data connection')
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('./public'))

app.use('', router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});