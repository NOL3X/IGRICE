// ----- COVER-I ZA IGRICE -----
var sc = document.getElementById("single_cover");
var mc = document.getElementById("multi_cover");
sc.addEventListener("mouseover", function () {
    sc.setAttribute("class", "obrisi");
});
mc.addEventListener("mouseover", function () {
    this.setAttribute("class", "obrisi");
});
var sp = document.getElementById("single_player").addEventListener("mouseleave", function () {
    sc.setAttribute("class", "front");
});
var mp = document.getElementById("multi_player").addEventListener("mouseleave", function () {
    mc.setAttribute("class", "front");
});