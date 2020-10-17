require('./config/config')
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//#region method GET, POST, PUT AND DELETE 
 
app.get('/usuario', function (req, res) {
  res.json('get usuario')
})

app.post('/usuario', function (req, res) {
    let body = req.body;

    if(body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'The name is necesary'
        });
    }
    res.json({
        persona: body
    })
  })

  app.put('/usuario/:id', function (req, res) {
      let id = req.params.id;
    res.json({
        id
    });
  })
  //#endregion

  app.delete('/usuario', function (req, res) {
    res.json('delete usuario')
    /* En la base de datos ya no se acostumbra a borrar los registros
       simplemente cambiar el estado de algo para que ya no se encuentre disponible.
    */
  })
 
app.listen(process.env.PORT, () => {
    console.log('Escuando en el puerto', 3000);
});