// ----- OPIS IGRE -----
document.querySelector(".opis").addEventListener("click", function () {
    if (document.querySelector(".opisi").getAttribute('class') == "opisi obrisi") {
        document.querySelector(".opisi").setAttribute("class", "opisi opisigre");
        setTimeout(function () {
            document.getElementById("opistekst").setAttribute("class", "opistekst");
        }, 1000);
    }
    else
        document.querySelector(".opisi").setAttribute("class", "opisi obrisi");
    document.getElementById("opistekst").setAttribute("class", "obrisi");
});
document.getElementById("iksic").addEventListener("click", function () {
    document.querySelector(".opisi").setAttribute("class", "opisi obrisi");
});

// ----- PROVERA DA LI JE KORISNIK ULOGOVAN-IZLOGOVAN -----
var ulogovan_korisnik = JSON.parse(localStorage.getItem("ulogovan"));
var registruj = document.getElementById('reg');
var uloguj = document.getElementById('log');
var ulogovan = document.getElementById('ulog');
var izloguj = document.getElementById('izlog');
if (ulogovan_korisnik != null)
    if (ulogovan_korisnik.kor_ime != null) {
        registruj.setAttribute('class', "obrisi");
        uloguj.setAttribute('class', "obrisi");
        ulogovan.setAttribute('class', "dugme");
        ulogovan.textContent = ulogovan_korisnik.kor_ime;
        izloguj.setAttribute('class', "dugme");
    }
izloguj.addEventListener('click', function () {
    var odgovor = window.confirm("Da li ste sigurni?");
    if (odgovor == false) { return; }
    var prazan = {};
    localStorage.setItem("ulogovan", JSON.stringify(prazan));
    window.location.reload();
})

var korisnik = {};
var korisnici = [];
var ulogovan_kor = {};

// ----- VALIDACIJA FORME ZA LOGOVANJE -----
uloguj.addEventListener('click', function () {
    var x = dohvati();
    if (x == null) { window.alert("Nema registrovanih korisnika!"); }
    else {
        document.getElementById('regis').setAttribute('class', "obrisi");
        var f = document.getElementById('login');
        if (f.getAttribute('class') == "container logovanje") {
            f.setAttribute('class', "obrisi");
        }
        else if (f.getAttribute('class') == "obrisi") {
            f.setAttribute('class', "container logovanje");
        }
        f.onsubmit = function () {
            var greska = document.querySelector("#greska");
            var kor_ime = document.querySelector("#id_log").value.trim();
            var pass = document.querySelector("#id_pass").value.trim();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == kor_ime) {
                    if (x[i].kor_ime == kor_ime && x[i].password == pass) {
                        ulogovan_kor.kor_ime = kor_ime;
                        ulogovan_kor.password = pass;
                        localStorage.setItem("ulogovan", JSON.stringify(ulogovan_kor));
                        return;
                    }
                    else if (x[i].kor_ime == kor_ime && x[i].password != pass) {
                        greska.textContent = "Neispravna lozinka!";
                        return false;
                    }
                }
            greska.textContent = "Nepostojeće korisničko ime!";
            return false;
        }
        f.onreset = function () {
            var odgovor = window.confirm("Da li zelite da odustanete?");
            if (odgovor == false) {
                return false;
            }
            window.location.reload();
        }
    }
});
// ----- KRAJ VALIDACIJE FORME ZA LOGOVANJE -----

// ----- VALIDACIJA FORME ZA REGISTRACIJU -----
registruj.addEventListener('click', function () {
    document.getElementById('login').setAttribute('class', "obrisi");
    var f = document.getElementById('regis');
    if (f.getAttribute('class') == "container registracija") {
        f.setAttribute('class', "obrisi");
    }
    else if (f.getAttribute('class') == "obrisi") {
        f.setAttribute('class', "container registracija");
    }
    f.onsubmit = function () {
        var greska = document.querySelector("#greska1");
        // IME
        var ime = document.querySelector("#name_reg").value.trim();
        if (ime == "") {
            greska.textContent = "Niste uneli ime!";
            return false;
        }
        if (ime.length < 2) {
            greska.textContent = "Ime mora imati bar 2 slova";
            return false;
        }
        for (i = 0; i < ime.length; i++)
            if (ime.charAt(i).toUpperCase() == ime.charAt(i).toLowerCase()) {
                greska.textContent = "Neispravna vrednost za ime! Možete koristiti samo slova!";
                return false;
            }
        // E-MAIL
        var email = document.querySelector("#email").value.trim();
        if (email == "") {
            greska.textContent = "Niste uneli email!";
            return false;
        }
        if (email == "" || email.includes("@") == false || email.includes(".") == false || email.includes(" ")) {
            greska.textContent = "Neispravna vrednost za email!";
            return false;
        }
        // KORISNIČKO IME
        var kor_ime = document.querySelector("#id_reg").value.trim();
        var kor_ime1 = kor_ime.split("");
        if (kor_ime == "") {
            greska.textContent = "Niste uneli korisničko ime!";
            return false;
        }
        if (kor_ime.length < 3) {
            greska.textContent = "Korisničko ime mora sadržati bar 3 karaktera";
            return false;
        }
        for (i = 0; i < kor_ime1.length; i++)
            if (kor_ime1[i].toUpperCase() == kor_ime1[i].toLowerCase() && (kor_ime1[i] < "0" || kor_ime1[i] > "9")) {
                greska.textContent = "Neispravna vrednost! Korisničko ime može saržati samo slova i brojeve!";
                return false;
            }
        var k = dohvati();
        if (k != null) {
            for (i = 0; i < k.length; i++) {
                if (k[i].kor_ime == kor_ime) {
                    greska.textContent = "Korisničko ime je zauzeto! Izaberite neko drugo!";
                    return false;
                }
            }
        }
        // LOZINKA
        var pass = document.querySelector("#reg_pass").value.trim();
        var pass1 = pass.split("");
        if (pass == "") {
            greska.textContent = "Niste uneli lozinku!";
            return false;
        }
        if (pass.includes(" ")) {
            greska.textContent = "Neispravna vrednost! Lozinka ne sme sadržati razmak!";
            return false;
        }
        if (pass.length < 8) {
            greska.textContent = "Lozinka mora sadržati bar 8 karaktera!";
            return false;
        }
        var broj = 0;
        var velika = 0;
        var mala = 0;
        for (i = 0; i < pass1.length; i++) {
            if (pass1[i] >= "0" && pass1[i] <= "9") { broj++; }
            else if (pass1[i].toUpperCase() == pass1[i] && pass1[i].toLowerCase() != pass1[i]) { velika++; }
            else if (pass1[i].toUpperCase() != pass1[i] && pass1[i].toLowerCase() == pass1[i]) { mala++; }
        }
        if (velika == 0 || mala == 0 || (broj == 0)) {
            greska.textContent = "Neispravna vrednost! Lozinka mora sadržati bar po jedno: veliko slovo, malo slovo i broj!";
            return false;
        }
        // SMESTANJE KORISNIKA
        korisnik.ime = ime;
        korisnik.email = email;
        korisnik.kor_ime = kor_ime;
        korisnik.password = pass;
        korisnik.ves_pob = 0;
        korisnik.ves_por = 0;
        korisnik.mem_pob = 0;
        korisnik.mem_por = 0;
        korisnik.loto0 = 0;
        korisnik.loto1 = 0;
        korisnik.loto2 = 0;
        korisnik.loto3 = 0;
        korisnik.loto4 = 0;
        korisnik.loto5 = 0;
        korisnik.loto6 = 0;
        korisnik.loto7 = 0;
        if (k != null) {
            console.log(k);
            k.push(korisnik);
            smesti = JSON.stringify(k);
        } else {
            korisnici.push(korisnik);
            smesti = JSON.stringify(korisnici);
        }
        localStorage.setItem("korisnici", smesti);
    }
    f.onreset = function () {
        var odgovor = window.confirm("Da li zelite da odustanete?");
        if (odgovor == false) {
            return false;
        }
        window.location.reload();
    }
});
function dohvati() {
    var dohvati = localStorage.getItem("korisnici");
    var k = JSON.parse(dohvati);
    return k;
}
// ----- KRAJ VALIDACIJE FORME ZA REGISTRACIJU -----