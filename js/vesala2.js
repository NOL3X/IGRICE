// ----- UNOS POJMA I POCETAK IGRE -----
var unesirec = document.getElementById("unesi");
unesirec.addEventListener("click", function () {
    x1 = prompt("Unesite skrivenu rec:");
    if (x1 == "" || x1 == null) { return; }
    x1 = x1.toUpperCase();
    x = x1.split("");
    elementi();
    mytajmer();
    polja();
    ok.addEventListener("click", provera);
});

// ----- POLJA ZA ISPIS PROMAŠAJA -----
var p = document.getElementById("promasaji");
for (i = 0; i < 6; i++) {
    var y = document.createElement("div")
    y.setAttribute("class", "polje1");
    y.innerText = "";
    p.appendChild(y);
}

// ----- PROMENLJIVE -----
var a = document.getElementsByClassName("polje");
var p1 = document.getElementsByClassName("polje1");
var brojac = document.getElementById("brojac");
var ok = document.getElementById("potvrda");
var tajmer=document.getElementById("tajmer");
var broj = 6, b = [], b1, x, x1, p2 = [];
// ----- OK DUGME REAGUJE NA ENTER -----
var slovce = document.getElementById('slovo');
slovce.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.getElementById('potvrda').click();
    }
});

// ----- SKRIVANJE JEDNIH I POJAVLJIVANJE DRUGIH ELEMENATA -----
function elementi() {
    unesirec.parentNode.removeChild(unesirec);
    slovce.removeAttribute("disabled");
    ok.removeAttribute("disabled");
    document.getElementById("odustajem").setAttribute("class", "predaja");
    document.getElementById("pomoc").setAttribute("class", "predaja");
}

// ----- ISPIS POLJA SKRIVENOG POJMA -----
function polja() {
    var z = document.getElementById("omotac");
    for (i = 0; i < x.length; i++) {
        var y = document.createElement("div")
        y.setAttribute("class", "polje");
        y.innerText = "_";
        if (x[i] == " ") { y.innerText = " "; }
        z.appendChild(y);
    }
}

// ----- PROVERA I ISPIS SLOVA -----
function provera() {
    var slovo = document.getElementById("slovo").value.toUpperCase();
    for (i = 0; i < x1.length; i++) {
        if (x[i] == " ") {
            a[i].innerText = x[i];
            b[i] = x[i];
        }
        if (slovo == x[i]) {
            a[i].innerText = x[i];
            b[i] = x[i];
        }
    }
    b1 = b.join("");
    if (p2.includes(slovo) == true) {
        alert("Već ste pokušali to slovo! I dalje ga nema!");
    }
    else if (b1.includes(slovo) != true) {
        broj--;
        p1[broj].innerText = slovo;
        p2.push(p1[broj].innerText);
    }
    if (b1 == x1) {
        nova()
        pobeda();
    }
    brojac.innerText = broj;
    if (broj == 0) { resenje(); }
    if (broj < 2) { pomoc.setAttribute("disabled", "true"); }
    slovce.value = "";
}

// ----- NOVA IGRA -----
function nova() {
    var x = document.createElement("div");
    x.setAttribute("id", "novaigra");
    x.textContent = "NOVA IGRA";
    x.addEventListener("click", function () {
        window.location.reload();
    });
    var y = document.getElementById("container2");
    y.appendChild(x);
    giveup.parentNode.removeChild(giveup);
    pomoc.parentNode.removeChild(pomoc);
    slovce.setAttribute("disabled", "true");
    ok.setAttribute("disabled", "true");
    slovce.value = "";
}

// ----- VREME -----
function mytajmer() {
    var t = 59;
    var x = setInterval(function () {
        tajmer.textContent = t;
        t--;
        if (t < 0) {
            clearInterval(x);
            resenje();
        }
        else if (broj == 0 || b1 == x1) {
            clearInterval(x);
            tajmer.textContent = t + 2;
        }
    }, 1000);
}

// ----- PREDAJEM SE -----
var giveup = document.getElementById("odustajem");
giveup.addEventListener("click", function () {
    for (i = 0; i < x.length; i++) {
        a[i].innerText = x[i];
    }
    b1 = x1;
    poraz();
    nova();
});

// ----- ISPIS REŠENJA -----
function resenje() {
    for (i = 0; i < x.length; i++) {
        a[i].innerText = x[i];
    }
    nova();
    poraz();
}

// ----- DUGME ZA POMOC -----
var pomoc = document.getElementById("pomoc");
pomoc.addEventListener("click", function () {
    for (i = 0; i < x1.length; i++) {
        if (a[i].innerText != "_")
            continue;
        a[i].innerText = x[i];
        for (j = 0; j < x1.length; j++)
            if (a[i].innerText == x[j]) {
                a[j].innerText = x[j];
                b[j] = x[j];
            }
        b1 = b.join("");
        pomoc.setAttribute("disabled", "true");
        broj--;
        p1[broj].innerText = "*";
        brojac.innerText = broj;
        if (b1 == x1) {
            nova()
            pobeda();
        }
        return;
    }
});

// ----- POBEDA -----
function pobeda() {
    setTimeout(function () {
        document.getElementById("por_pobeda").setAttribute("class", "pp");
    }, 100);
}

// ----- PORAZ -----
function poraz() {
    setTimeout(function () {
        document.getElementById("por_poraz").setAttribute("class", "pp");
    }, 100);
}