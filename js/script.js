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
        param1: 1,
        param2: 53
      };
      
      var xhr = new XMLHttpRequest();
      xhr.open('get', 'php/api.php', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      
      xhr.onreadystatechange = function() {
        alert(xhr.responseText);
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          // Tutaj obsłuż otrzymane wyniki
          alert(xhr.responseText);
        }
        else{
            alert('error');
        }
      };
      
      xhr.send(JSON.stringify(data));      
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