const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const { json } = require('body-parser');
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: '*'
    })
);


router.get('/', (req, res) => {
    const retorno = {
        nome: "Tiago Fernando",
        email: "tiagofernando282@gmail.com"
    };

    res.send(JSON.stringify(retorno));

});

app.use(router);
app.listen(port);
