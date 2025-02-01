const express = require('express');
const cors= require('cors');
const bodyParser = require('body-parser');  
const dotenv= require('dotenv');
const database = require('./config/database.js');
const authRouter = require("./routes/auth.js");
const postRouter = require("./routes/post.js");

//* env dosyasındaki verilere erişmek için kurulum
dotenv.config();  

//* Express Uygulaması oluştur
const app = express();

//* CORS hatalarını önüne geçmek için header'lar ekler
app.use(cors());

app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

//*giriş yönlendirmesi için 
app.use("/",authRouter)
app.use("/",postRouter)

database();

//* Hangi portun dinleneceğini belirtelim
app.listen(process.env.PORT, () => {
    console.log(`API ${process.env.PORT} portunu dinlemeye başladı ✅`);
  });