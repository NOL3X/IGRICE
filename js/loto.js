var tabla = document.getElementById("tabla");
var izvuceni = document.getElementById("izvuceni_brojevi");
var izabrani = document.getElementById("izabrani_brojevi");
// ----- KREIRANJE BROJEVA ZA IZVLAČENJE -----
for (i = 0; i < 39; i++) {
    var broj = document.createElement("button");
    broj.setAttribute("class", "brojevi");
    broj.innerText = i + 1;
    tabla.appendChild(broj);
}
// ----- KREIRANJE POLJA ZA IZVUČENE BROJEVE -----
for (i = 0; i < 7; i++) {
    var broj2 = document.createElement("div");
    broj2.setAttribute("class", "nevidljivi");
    var broj = document.createElement("div");
    broj.setAttribute("class", "izvuceni_brojevi");
    broj2.appendChild(broj);
    izvuceni.appendChild(broj2);
}
// ----- KREIRANJE POLJA ZA IZABRANE BROJEVE -----
for (i = 0; i < 7; i++) {
    var broj2 = document.createElement("div");
    broj2.setAttribute("class", "nevidljivi");
    var broj = document.createElement("div");
    broj.setAttribute("class", "izabrani_brojevi");
    broj2.appendChild(broj);
    izabrani.appendChild(broj2);
}

// ----- PROMENLJIVE -----
var izvuceni_brojevi = document.getElementsByClassName("izvuceni_brojevi");
var izabrani_brojevi = document.getElementsByClassName("izabrani_brojevi");
var brojevi = document.getElementsByClassName("brojevi");
var biranje = document.getElementById("biranje");
var j = 0, brojke = [], brojke1 = [], dobitak, brojke2, random, k = 0;

// ----- BIRANJE BROJEVA -----
for (i = 0; i < 39; i++) {
    brojevi[i].addEventListener("click", function () {
        izabrani_brojevi[j].innerText = this.innerText;
        brojke1.push(izabrani_brojevi[j].innerText);
        this.setAttribute("disabled", "true");
        this.style.backgroundColor = "blue";
        j += 1;
        if (j == 7) { loto0(); animacija(); }
    });
}

// ----- IZABRANI BROJEVI - PROMENA BOJA, SORTIRANJE, PROMENA TEKSTA I POČETAK IZVLAČENJA -----
function animacija() {
    for (i = 0; i < 39; i++) {
        brojevi[i].setAttribute("disabled", "true");
        brojevi[i].style.cursor = "not-allowed";
    }
    setTimeout(function () {
        for (i = 0; i < 7; i++) {
            izabrani_brojevi[i].style.animation = "proba 1.5s linear forwards";
        }
        biranje.style.animation = "proba 2s linear forwards";
        for (i = 0; i < 39; i++) {
            brojevi[i].style.animation = "proba2 2s 1s linear forwards";
        }
    }, 1000);
    setTimeout(function () {
        brojke1.sort(function (a, b) { return a - b });
        brojke2 = brojke1.map(Number);
        for (i = 0; i < 7; i++) {
            izabrani_brojevi[i].innerText = brojke1[i];
            izabrani_brojevi[i].style.animation = "proba1 1.5s linear forwards";
        }
        setTimeout(random, 2500);
    }, 2500);
}

// ----- IZVLAČENJE BROJEVA I INFO O POGOĐENIM BROJEVIMA I EVENTUALNOM DOBITKU -----
function random() {
    for (i = 0; i < 39; i++) {
        brojevi[i].style = null;
    }
    var vrti = setInterval(function () {
        izvuceni_brojevi[k].innerText = Math.ceil(Math.random() * 39);
    }, 50);
    var izvlacenje = document.getElementById("izvlacenje");
    izvlacenje.setAttribute("class", "tekst");
    var interval = setInterval(function () {
        var random = Math.ceil(Math.random() * 39);
        console.log(random);
        if (brojke.indexOf(random) == -1) {
            brojke.push(random);
            izvuceni_brojevi[k].innerText = brojke[k];
            for (i = 0; i < 39; i++) {
                if (brojke[k] == brojevi[i].innerText)
                    brojevi[i].style.backgroundColor = "yellow";
            }
            k++;
        }
        if (k == 7) {
            clearInterval(vrti);
            clearInterval(interval);
            animacija1();
            setTimeout(pogodjeni, 4500);
            setTimeout(info, 6500);
        }
    }, 1500);
}

// ----- IZVUČENI BROJEVI - PROMENA BOJA, SORTIRANJE I PROMENA TEKSTA -----
function animacija1() {
    setTimeout(function () {
        for (i = 0; i < 7; i++) {
            izvuceni_brojevi[i].style.animation = "proba 1.5s linear forwards";
        }
        izvlacenje.style.animation = "proba 2.5s linear forwards";
    }, 1000);
    setTimeout(function () {
        brojke.sort(function (a, b) { return a - b });
        for (i = 0; i < 7; i++) {
            izvuceni_brojevi[i].innerText = brojke[i];
            izvuceni_brojevi[i].style.animation = "proba1 1.5s linear forwards";
        }
    }, 2500);
}

// ----- PROMENA BOJE POGOĐENIH BROJEVA -----
function pogodjeni() {
    dobitak = brojke.filter(element => brojke2.includes(element));
    for (i in brojke)
        for (j in brojke2)
            for (k in brojevi)
                if (brojke[i] == brojke2[j] && brojke2[j] == parseInt(brojevi[k].innerText)) {
                    izvuceni_brojevi[i].style.animation = "proba3 1s linear forwards";
                    izabrani_brojevi[j].style.animation = "proba3 1s linear forwards";
                    brojevi[k].style.animation = "proba3 1s linear forwards";
                }
}

// ----- OBAVEŠTENJE O BROJU POGODAKA I EVENTUALNOM DOBITKU -----
function info() {
    if (dobitak.length == 1) { alert("\nPogodili ste samo 1 broj!\nVise srece drugi put!"); loto1(); }
    else if (dobitak.length == 2) { alert("\nPogodili ste samo 2 broja!\nVise srece drugi put!"); loto2(); }
    else if (dobitak.length == 3) { alert("\nPogodili ste samo 3 broja!\nVise srece drugi put!"); loto3(); }
    else if (dobitak.length == 4) { alert("\nCestitamo!\nImate 4 pogotka!\nOsvojili ste " + cetvorka); loto4(); }
    else if (dobitak.length == 5) { alert("\nCestitamo!\nImate 5 pogodaka!\nOsvojili ste " + petica); loto5(); }
    else if (dobitak.length == 6) { alert("\nCestitamo!\nImate 6 pogodaka!\nOsvojili ste " + sestica); loto6(); }
    else if (dobitak.length == 7) { alert("\nCestitamo!\nImate 7 pogodaka!\nOsvojili ste LOTO premiju u iznosu od " + s.innerText); loto7(); }
    else { alert("\nNemate nijedan pogodak\nVise srece drugi put"); }
    { window.location.reload(); }
}

// ----- GENERISANJE FONDA NAGRADA -----
var s, sedmica, sestica, petica, cetvorka;
function nagrada() {
    var m = document.getElementById("fond");
    m.innerText = (Math.floor(Math.random() * 2000000) + 6000000).toLocaleString() + " din";
    s = document.getElementById("sedmica");
    sedmica = Math.floor(Math.random() * 1000000) + 3000000;
    s.innerText = sedmica.toLocaleString() + " din";
    sestica = (Math.floor(sedmica / 20)).toLocaleString() + " din";
    petica = (Math.floor(sedmica / 190)).toLocaleString() + " din";
    cetvorka = (Math.floor(sedmica / 2020)).toLocaleString() + " din";
}
window.onload = nagrada;

// ----- RANG LISTE DOBITNIKA -----
function loto0() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto1() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto1++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto2() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto2++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto3() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto3++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto4() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto4++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto5() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto5++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto6() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto6++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}
function loto7() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].loto0--;
                    x[i].loto7++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}