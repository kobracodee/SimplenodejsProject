const express = require("express");
const { readFile } = require("fs");

const app = express();

app.use(express.static("static"));
app.get("/", (request, response) => {
  readFile("./static/index.html", "utf8", (err, html) => {
    if (err) {
      response.status(500).send("Out of service");
    }

    response.send(html);
  });
});

if (typeof document !== "undefined") {
  let input = document.querySelector("input-f");
  document.getElementById("submit-btn").onclick = function () {
    // badi e3mal shi
  };
}

app.listen(process.env.PORT || 3000, () =>
  console.log("Applictation avialable ob http://localhost:3000")
);
