const express = require("express");
const router = require("./server/routes.js");
const app = express();
const path = require("path");
const bp = require("body-parser");
app.use(express.static(path.join(__dirname, "/authors/dist/authors" )));
app.use(bp.json());
router(app);
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./authors/dist/authors/index.html"))
  });


app.listen(8000, (errs)=>console.log(errs?errs:'gucci'));
