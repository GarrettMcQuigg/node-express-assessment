const fs = require("fs");
const axios = require("axios");


axios.get("http://rithmschool.com").then((response) => {
  // console.log(response.data);
  res = response.data;

  fs.writeFile("part-2-outputs/rithmschool.txt", res, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log("Wrote to:", "rithmschool.com");
  });
});



axios.get("http://postgresql.com").then((response) => {
  // console.log(response.data);
  res = response.data;

  fs.writeFile("part-2-outputs/postgres.txt", res, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log("Wrote to:", "postgresql.com");
  });
});



axios.get("http://foozlemcblargh.com").then((response) => {
  // console.log(response.data);
  res = response.data;

  fs.writeFile("part-2-outputs/foozlemcblargh.txt", res, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log("Wrote to:", 'foozlemcblargh.com');
  });
});



axios.get("https://nodejs.org").then((response) => {
  // console.log(response.data);
  res = response.data;

  fs.writeFile("part-2-outputs/nodejs.txt", res, "utf8", (err, data) => {
    if (err) {
      console.log("ERROR:", err);
    }
    console.log("Wrote to:", 'nodejs.org');
  });
});
