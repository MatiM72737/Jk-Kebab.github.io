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
function zamow() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "php/api.php?id_sos="+document.getElementById("wyborSosu").value+"&id_mieso="+document.getElementById("wyborMiesa").value+"&id_opakowanie="+document.getElementById("wyborTypu").value+"&adres="+document.getElementById("adres").value+"&nr_tel="+document.getElementById("nrTel").value, true);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        var response = xhr.responseText;
        console.log(response);
        openPopup("Brawo!", "Leci Do Ciebie Twój Kebab!\nDo zapłaty: " + response + "zł.");
      } else {
        console.error("Request failed with status: " + xhr.status);
        openPopup("Request failed with status: ", xhr.status);
      }
    }
  };
  xhr.send();
}
function openPopup(h1, p) {
  var popup = document.getElementById("popup");
  var popupH1 = document.querySelector('.popupH1');
  var popupP = document.querySelector('.popupP');
  popupH1.innerHTML = h1;
  popupP.innerHTML = p;
  popup.style.display = "block";
}

function closePopup() {
  var popup = document.getElementById("popup");
  popup.style.display = "none";
}
