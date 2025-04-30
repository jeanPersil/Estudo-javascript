const bodyparser = require("body-parser");
const express = require("express");
const multer = require("multer");
const app = express();

app.use(express.static("."));
app.use(bodyparser.urlencoded({ extended: true }));

app.use(bodyparser.json());

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./upload");
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}_${file.originalname}`);
  },
});

const upload = multer({ storage }).single("arquivo");

app.post("/upload", (req, resp) => {
  upload(req, resp, (err) => {
    if (err) {
      return resp.end("ocorreu um erro.");
    } else {
      resp.end("concluido com sucesso.");
    }
  });
});

app.post("/formulario", (req, resp) => {
  console.log(req.body);
  resp.send({
    ...req.body,
    id: 1,
  });
});
app.listen(8081, () => console.log("teste"));
