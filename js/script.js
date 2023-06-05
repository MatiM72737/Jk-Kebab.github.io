function ONAS()
{
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
    var data = {
        param1: 'wartość1',
        param2: 'wartość2'
      };
      
    fetch('php/api.php', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
    // Tutaj obsłuż otrzymane wyniki
    alert(data);
    })
    .catch(error => {
    // Tutaj obsłuż błędy
    alert('Wystąpił błąd:'+ error);
    });
}
function KEBABY()
{
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
function ZAMOWIENIA()
{
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
function KONTAKT()
{
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