import express from 'express';
import Connection from './database/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import Routes from './route/routes.js';
import Routess from "./route/routess.js"
import session from 'express-session';
const app = express()

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false
}));

const PORT = 8000;
dotenv.config()

app.use(cors());

app.use(bodyParser.json({extended : true}))
app.use(bodyParser.urlencoded({extended : true}))
const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD
Connection(username,password)

app.use('/', Routes);
app.use('/uploads', express.static('uploads'))

app.use('/', Routess);
app.use('/uploadss', express.static('uploadss'))

app.listen(PORT, () =>{
    console.log("Server Listening On Port Number "+PORT)
})
