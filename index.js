console.log("I am server file");
import express from 'express';
const app = express()
import mongoose from 'mongoose';
const port = process.env.PORT || 8000
import saad from './Routes/home.js'


app.set('view engine','ejs')
app.use('/' , saad )



app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})