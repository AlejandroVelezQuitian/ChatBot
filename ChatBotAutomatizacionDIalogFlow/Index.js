const express = require ('express');
const app = express();
app.use(express.static(__dirname));
app.listen('3000',function(){
    console.log("servidor web melo en el puerto 3000, http://localhost:3000/");
});