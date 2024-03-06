const express = require ('express')


const app  = express
const puerto = 8000


app.get ('/', (req,res) => {
    res.send('Hola Mundo!')

})


app.listen (puerto, ()=> {
    console.log(`El servidor está escuchando en http://localhost:${puerto}`);
})