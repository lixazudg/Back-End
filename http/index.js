const express = require("express");
const cors = require("cors");
const config = require("../config");
const api = require("../api");

const {host, port}=config.http;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", api);

const init = () => {
    app.listen(port, host, () =>{
        console.log(`Server runing on http://${host}:${port}`);
    })
}

module.exports = {init};