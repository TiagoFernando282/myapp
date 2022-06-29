const express = require('express');
const app = express();
const router = express.Router();
const cors = require('cors');
const port = process.env.PORT || 3000;

app.use(
    cors({
        origin: '*'
    })
);


router.get('/', (req, res) => {

    res.send("Bem vindo ao node js no Heroku");

});

app.use(router);
app.listen(port);
