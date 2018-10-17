var a = "Hello world";

document.getElementById("app").innerHTML = a + "!! <br /><br />";

document.getElementById("app").innerHTML =
  document.getElementById("app").innerHTML + "Další text <br /><br />";

var x = 2;
var y = 7;
var z = x + y;

document.getElementById("vysledek").innerHTML = "Výsledek je " + z;

/*var year = prompt("V kterém roce ses narodil?", "");

if (year < 1989) alert("Bylo ti třicet.");
else alert("Bude ti třicet");
*/
/*var osmnact = confirm("Bylo vám už 18?");
alert(osmnact);
*/
var cislo = 18;
var osmnact;

if (cislo < 18) osmnact = false;
else osmnact = true;

document.getElementById("cislo").innerHTML = osmnact;

osmnact = cislo < 18 ? "Nebylo osmnáct" : "Bylo osmnáct";

document.getElementById("cislo").innerHTML = document.getElementById(
  "cislo"
).innerHTML = osmnact;

/*var promenna = prompt('Zadej číslo!');
alert(+promenna +100);
*/
