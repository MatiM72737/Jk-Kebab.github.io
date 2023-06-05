function ONAS() {
  var ONAS = document.getElementById("ONAS");
  var KEBABY = document.getElementById("KEBABY");
  var ZAMOWIENIA = document.getElementById("ZAMOWIENIA");
  var KONTAKT = document.getElementById("KONTAKT");
  ONAS.classList.remove("none");
  ONAS.classList.add("contentClass");

  KEBABY.classList.remove("contentClass");
  KEBABY.classList.add("none");

  ZAMOWIENIA.classList.remove("contentClass");
  ZAMOWIENIA.classList.add("none");

  KONTAKT.classList.remove("contentClass");
  KONTAKT.classList.add("none");
  const mysql = require("mysql");
  const connection = mysql.createConnection({
    host: "db4free.net",
    user: "jk_root",
    password: "uZnvM42367",
    database: "test",
  });
  connection.connect((err) => {
    console.log("jol");
    if (err) throw err;
    alert("Connected to the database!");
  });
  connection.end((err) => {
    if (err) throw err;
    console.log("Disconnected from the database!");
  });
}
function KEBABY() {
  var ONAS = document.getElementById("ONAS");
  var KEBABY = document.getElementById("KEBABY");
  var ZAMOWIENIA = document.getElementById("ZAMOWIENIA");
  var KONTAKT = document.getElementById("KONTAKT");
  KEBABY.classList.remove("none");
  KEBABY.classList.add("contentClass");

  ONAS.classList.remove("contentClass");
  ONAS.classList.add("none");

  ZAMOWIENIA.classList.remove("contentClass");
  ZAMOWIENIA.classList.add("none");

  KONTAKT.classList.remove("contentClass");
  KONTAKT.classList.add("none");
}
function ZAMOWIENIA() {
  var ONAS = document.getElementById("ONAS");
  var KEBABY = document.getElementById("KEBABY");
  var ZAMOWIENIA = document.getElementById("ZAMOWIENIA");
  var KONTAKT = document.getElementById("KONTAKT");
  ZAMOWIENIA.classList.remove("none");
  ZAMOWIENIA.classList.add("contentClass");

  KEBABY.classList.remove("contentClass");
  KEBABY.classList.add("none");

  ONAS.classList.remove("contentClass");
  ONAS.classList.add("none");

  KONTAKT.classList.remove("contentClass");
  KONTAKT.classList.add("none");
}
function KONTAKT() {
  var ONAS = document.getElementById("ONAS");
  var KEBABY = document.getElementById("KEBABY");
  var ZAMOWIENIA = document.getElementById("ZAMOWIENIA");
  var KONTAKT = document.getElementById("KONTAKT");
  KONTAKT.classList.remove("none");
  KONTAKT.classList.add("contentClass");

  KEBABY.classList.remove("contentClass");
  KEBABY.classList.add("none");

  ZAMOWIENIA.classList.remove("contentClass");
  ZAMOWIENIA.classList.add("none");

  ONAS.classList.remove("contentClass");
  ONAS.classList.add("none");
}
