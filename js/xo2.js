// ----- ISPIS IMENA PRVOG IGRAČA UKOLIKO JE ULOGOVAN -----
var igrac1 = document.getElementById("igrac1");
if (ulogovan_korisnik != null)
    if (ulogovan_korisnik.kor_ime != null) {
        igrac1.value = ulogovan_korisnik.kor_ime;
        igrac1.setAttribute('disabled', 'true');
    }
// ----- ISPIS ZNAKA I BOJE U POLJE U TABELI -----
var polje;
var igrac = 'X';
var boja = "#aa1d28";
function igra(polje) {
    if (polje.innerText == "") {
        polje.innerText = igrac;
        igrac = igrac === "X" ? "O" : "X";
        polje.style.backgroundColor = boja;
        boja = boja === "#aa1d28" ? "#ff7259" : "#aa1d28";
        // if (turn == "X") { turn = "O" } else (turn = "X")
    }
}
// ----- DOHVATANJE TABELE -----
var x = document.getElementById("i");
x.addEventListener("click", klik);
function klik() {
    // ----- DOHVATANJE SVAKOG POLJA PO ID-U I ZNAKA UNUTAR NJEGA -----
    var x = [], y = [];
    for (i = 1; i < 10; i++) {
        x[i] = document.getElementById("i" + i);
        y[i] = x[i].innerText;
    }
    // ----- PROVERA DOBITNIH KOMBINACIJA -----
    var c1 = (y[1] == "X" && y[2] == "X" && y[3] == "X");
    var d1 = (y[1] == "O" && y[2] == "O" && y[3] == "O");
    var c2 = (y[1] == "X" && y[4] == "X" && y[7] == "X");
    var d2 = (y[1] == "O" && y[4] == "O" && y[7] == "O");
    var c3 = (y[1] == "X" && y[5] == "X" && y[9] == "X");
    var d3 = (y[1] == "O" && y[5] == "O" && y[9] == "O");
    var c4 = (y[2] == "X" && y[5] == "X" && y[8] == "X");
    var d4 = (y[2] == "O" && y[5] == "O" && y[8] == "O");
    var c5 = (y[3] == "X" && y[6] == "X" && y[9] == "X");
    var d5 = (y[3] == "O" && y[6] == "O" && y[9] == "O");
    var c6 = (y[3] == "X" && y[5] == "X" && y[7] == "X");
    var d6 = (y[3] == "O" && y[5] == "O" && y[7] == "O");
    var c7 = (y[4] == "X" && y[5] == "X" && y[6] == "X");
    var d7 = (y[4] == "O" && y[5] == "O" && y[6] == "O");
    var c8 = (y[7] == "X" && y[8] == "X" && y[9] == "X");
    var d8 = (y[7] == "O" && y[8] == "O" && y[9] == "O");
    // ----- PROMENA BOJE ZA DOBITNU KOMBINACIJU -----
    if (c1 || d1) { set(x[1], x[2], x[3]); }
    if (c2 || d2) { set(x[1], x[4], x[7]); }
    if (c3 || d3) { set(x[1], x[5], x[9]); }
    if (c4 || d4) { set(x[2], x[5], x[8]); }
    if (c5 || d5) { set(x[3], x[6], x[9]); }
    if (c6 || d6) { set(x[3], x[5], x[7]); }
    if (c7 || d7) { set(x[4], x[5], x[6]); }
    if (c8 || d8) { set(x[7], x[8], x[9]); }
    // ----- ISPIS POBEDNIKA, NOVA IGRA, PROMENA KO IGRA PRVI -----
    pot = igrac1.value;
    if (c1 || c2 || c3 || c4 || c5 || c6 || c7 || c8) {
        poruka("Pobednik je ➩ " + igrac1.value); nova(); pot = igrac2.value; kljuc();
    }
    else if (d1 || d2 || d3 || d4 || d5 || d6 || d7 || d8) {
        poruka("Pobednik je ➩ " + igrac2.value); nova(); kljuc();
    }
    // ----- ISPIS NEREŠENO, NOVA IGRA, PROMENA KO IGRA PRVI -----
    else if (y[1] != "" && y[2] != "" && y[3] != ""
        && y[4] != "" && y[5] != "" && y[6] != ""
        && y[7] != "" && y[8] != "" && y[9] != "") {
        poruka(" ⇒ Nerešeno je! ⇐ "); nova(); kljuc();
        if (igrac == "O") { pot = igrac2.value };
    }
};
// ----- PROMENA BOJE ZA DOBITNU KOMBINACIJU -----
function set(element1, element2, element3) {
    element1.style.background = "blue";
    element2.style.background = "blue";
    element3.style.background = "blue";
}
// ----- ISPIS PORUKE KO JE POBEDNIIK ILI NEREŠENO -----
var iks = document.getElementById("iksoks");
function poruka(poruka) {
    var p = document.createElement("div");
    p.setAttribute("id", "poruka");
    p.innerText = poruka;
    iks.appendChild(p);
}
// ----- ISPIS PORUKE KO JE NA POTEZU -----
function potez(potez) {
    var p = document.createElement("div");
    p.setAttribute("id", "potez");
    p.innerText = potez;
    iks.appendChild(p);
}
// ----- NOVA IGRA -----
function nova() {
    var n = document.createElement("div");
    n.setAttribute("id", "nova");
    n.innerText = "Nova igra";
    iks.appendChild(n);
    // ----- KLIKOM NA NOVU IGRU - STRANICA SE NE UČITAVA PONOVO -----
    // ----- VEĆ SE BRIŠE TEKST I BOJA POLJA KAO I ELEMENTI SA PORUKAMA -----
    n.addEventListener("click", function () { // window.location.reload()
        var z = document.getElementsByTagName("td");
        for (i = 0; i < 9; i++) {
            z[i].innerText = "";
            z[i].style.backgroundColor = "white";
        }
        obrisi("poruka"); obrisi("nova"); potez("Na potezu je ➩ " + pot);
        setTimeout(function () { obrisi("potez"); }, 1500); otvori();
    });
}
// ----- FUNKCIJA ZA BRISANJE ELEMENATA -----
function obrisi(id) {
    var element = document.getElementById(id);
    return element.parentNode.removeChild(element);
}
// ----- FUNKCIJA ZA ZAKLJUČAVANJE POLJA -----
function kljuc() {
    var z = document.getElementsByTagName("td");
    for (i = 0; i < 9; i++) {
        z[i].removeAttribute("onclick");
    }
    x.removeEventListener("click", klik);
}
// ----- FUNKCIJA ZA OTKLJUČAVANJE POLJA -----
function otvori() {
    var z = document.getElementsByTagName("td");
    for (i = 0; i < 9; i++) {
        z[i].setAttribute("onclick", "igra(this)");
    }
    x.addEventListener("click", klik);
}
otvori()