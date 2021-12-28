const router = require('express').Router();

class Controler {
    constructor() {
        this.router = router;
        this.configureRouter();
    }

    configureRouter() {
        this.router.post('/login', async (req, res) => {
            const username = req.body.username;
            const password = req.body.password;

            if (username === "u" && password ==="p") {
                res.send({value: "Identified"});
                res.status(202).end();
            }
        });
    }
}
module.exports =  { Controler };