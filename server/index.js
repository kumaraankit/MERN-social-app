import express from 'express';
import mongoose from 'mongoose';
import bodyparser from 'body-parser';
import cors from 'cors';

const app=express();

app.use(bodyparser.json({limit:'30mb',extented:true})) //body-parser is a middleware to handle post request
app.use(bodyparser.urlencoded({limit:'30mb',extented:true})) // it parses incoming request with urlencoded payloads
app.use(cors()); // CORS is shorthand for Cross-Origin Resource Sharing. It is a mechanism to allow or restrict requested resources on a web server depend on where the HTTP request was initiated.