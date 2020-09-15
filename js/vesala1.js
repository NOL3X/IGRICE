var grad = ["BEOGRAD", "NOVI SAD", "KRAGUJEVAC", "NOVI PAZAR", "SREMSKA MITROVICA", "SOMBOR", "LESKOVAC", "PRIZREN", "PODGORICA", "BAR", "KOTOR", "TIVAT", "SARAJEVO", "MOSTAR", "ZAGREB", "SPLIT", "OSIJEK", "NOVI GRAD", "MARIBOR", "RIJEKA", "ISTRA", "DUBROVNIK", "HERCEG NOVI", "MOJKOVAC", "BUDVA", "DANILOVGRAD", "SOLUN", "ATINA", "ANKARA", "ISTANBUL", "BAKU", "MOSKVA", "LUGANSK", "TBILISI", "KIJEV", "ODESA", "MINSK", "RIGA", "BRATISLAVA", "SEGEDIN", "GRAC", "SOFIJA", "TRST", "VENECIJA", "MILANO", "RIM", "TORINO", "BARI", "MARSEJ", "LION", "TULUZ", "PARIZ", "KAN", "MONTE KARLO", "BARSELONA", "MADRID", "VALENSIJA", "LISABON", "PORTO", "BRISEL", "HAG", "ROTERDAM", "AMSTERDAM", "BON", "BERLIN", "MINHEN", "KELN", "FRANKFURT", "HAMBURG", "LUKSEMBURG", "KOPENHAGEN", "STOKHOLM", "OSLO", "HELSINKI", "TALIN", "LONDON", "LIVERPUL", "DABLIN", "GLAZGOV", "REJKJAVIK", "TUNIS", "KAIRO", "RABAT", "KAZABLANKA", "TRIPOLI", "ALEKSANDRIJA", "NIKOZIJA", "BEJRUT", "DAMASK", "JERUSALIM", "TEL AVIV", "BAGDAD", "TEHERAN", "ABU DABI", "ADIS ABEBA", "BEJRUT", "BERN", "BOGOTA", "BRAZILIJA", "BUENOS AJRES", "VELINGTON", "VIKTORIJA", "DAKAR", "DOHA", "ISLAMABAD", "JEREVAN", "KABUL", "KUVAJT", "LIMA", "MANILA", "NAJROBI", "OTAVA", "PEKING", "PJONGJANG", "PRAG", "PRETORIJA", "SAN MARINO", "SAN SALVADOR", "HAVANA", "HANOJ", "ULAN BATOR", "SIDNEJ", "MELBURN", "PERT", "JOKOHAMA", "OSAKA", "JOHANEZBURG", "TORONTO", "MONTREAL", "VANKUVER", "MOMBASA", "LARNAKA", "DUBAI", "CIRIH", "LOZANA", "LUCERN", "SAN FRANCISKO", "SAN ANTONIO", "MAJAMI", "ORLANDO", "DENVER", "HJUSTON", "FILADELFIJA", "BOSTON", "PORTLAND", "DALAS", "ALBUKERKI", "LAS VEGAS", "SAKRAMENTO", "OJMJAKON", "PRILEP", "SJENICA", "LOZNICA", "KIKINDA", "KOSOVSKA MITROVICA"];
var drzava = ["SRBIJA", "CRNA GORA", "BOSNA I HERCEGOVINA", "MAKEDONIJA", "HRVATSKA", "SLOVENIJA", "BUGARSKA", "RUMUNIJA", "TURSKA", "RUSIJA", "KINA", "JAPAN", "EGIPAT", "MAROKO", "ZIMBABVE", "MADAGASKAR", "ARGENTINA", "BRAZIL", "PERU", "URUGVAJ", "PARAGVAJ", "BOLIVIJA", "EKVADOR", "SURINAM", "GVAJANA", "VENECUELA", "KOLUMBIJA", "MEKSIKO", "PANAMA", "KOSTARIKA", "NIKARAGVA", "HONDURAS", "SALVADOR", "GVATEMALA", "KUBA", "JAMAJKA", "HAITI", "PORTORIKO", "BARBADOS", "ANTIGVA I BARBUDA", "DOMINIKANSKA REPUBLIKA", "ANDORA", "BRUNEJ", "INDIJA", "KANADA", "ITALIJA", "AUSTRIJA", "SAO TOME I PRINCIPE", "IRSKA", "FINSKA", "ESTONIJA", "LETONIJA", "LITVANIJA", "LUKSEMBURG", "DANSKA", "BELGIJA", "HOLANDIJA", "UKRAJINA", "MOLDAVIJA", "BELORUSIJA", "FRANCUSKA", "PORTUGALIJA", "IRSKA", "ISLAND", "FARSKA OSTRVA", "ANDORA", "MALTA", "ALBANIJA", "KIPAR", "LIBAN", "SIRIJA", "IZRAEL", "JORDAN", "IRAK", "IRAN", "SAUDIJSKA ARABIJA", "BAHREIN", "KUVAJT", "KATAR", "OMAN", "JEMEN", "GRUZIJA", "MOLDAVIJA", "JERMENIJA", "UZBEKISTAN", "TURKMENISTAN", "AVGANISTAN", "KIRGIZIJA", "PAKISTAN", "INDIJA", "NEPAL", "BUTAN", "TAJLAND", "LAOS", "VIJETNAM", "MALEZIJA", "SINGAPUR", "FILIPINI", "TAJVAN", "SEVERNA KOREJA", "AUSTRALIJA", "NOVI ZELAND", "INDONEZIJA", "MONGOLIJA", "KAZAHSTAN", "TUNIS", "LIBIJA", "MAURITANIJA", "MALI", "NIGER", "SENEGAL", "GVINEJA", "SIJERA LEONE", "LIBERIJA", "BURKINA FASO", "GANA", "TOGO", "BENIN", "NIGERIJA", "KAMERUN", "SUDAN", "ERITREJA", "ETIOPIJA", "SOMALIJA", "KENIJA", "UGANDA", "RUANDA", "BURUNDI", "TANZANIJA", "KONGO", "GABON", "ANGOLA", "ZAMBIJA", "MALAVI", "MOZAMBIK", "BOCVANA", "NAMIBIJA", "LESOTO", "SVAZILEND", "MAURICIJUS", "MALDIVI", "SAN MARINO", "TRINIDAD I TOBAGO"];
var reka = ["DUNAV", "SAVA", "DRINA", "TARA", "MORAVA", "ZAPADNA MORAVA", "KOLUBARA", "VELIKA MORAVA", "RZAV", "TISA", "IBAR", "DRIM", "MLAVA", "LIM", "TIMOK", "BEGEJ", "TOPLICA", "PEK", "NERA", "UVAC", "KRIVAJA", "RASINA", "SITNICA", "TAMNAVA", "JABLANICA", "CRNI TIMOK", "JASENICA", "JERMA", "VLASINA", "STUDENICA", "BELI DRIM", "BELI TIMOK", "BOJANA", "BREZNICA", "PIVA", "RIBNICA", "ZETA", "BISTRICA", "BOSNA", "VRBAS", "NERETVA", "SANA", "SUTJESKA", "CRNI RZAV", "DRAVA", "VARDAR", "BREGALNICA", "RAJNA", "ELBA", "AMAZON", "NIL", "VOLGA", "URAL", "DON", "UNA", "SENA", "TEMZA", "TIBAR", "TIGAR", "EUFRAT", "JENISEJ", "GANG", "NIGER", "IND", "RIO GRANDE", "KOLORADO", "MISISIPI", "MISURI", "MAJNA", "VISLA", "RONA", "PO", "MURA", "JANGCEKJANG", "HOANGHO", "OB", "KONGO", "AMUR", "LENA", "MEKONG", "MAKENZI", "MADEIRA", "JUKON", "PURUS", "ZAMBEZI", "PARAGVAJ", "RIO NEGRO", "KOLUMBIJA", "ORINOKO", "ALDAN", "SENEGAL", "URUGVAJ"];
var skup = [grad, drzava, reka];
//localStorage.setItem("reke", JSON.stringify(reka));
//var reke = JSON.parse(localStorage.getItem("reke"));
var reka1 = document.getElementById("reka");
var drzava1 = document.getElementById("drzava");
var grad1 = document.getElementById("grad");
var skup1 = [grad1, drzava1, reka1];
var skup2 = ["GRAD", "DRŽAVU", "REKU"];

// ----- SLOVA -----
var os = document.getElementById("omotac_slova");
for (i = 0; i < 22; i++) {
    var y = document.createElement("button")
    y.setAttribute("class", "azbuka");
    y.innerText = String.fromCharCode(65 + i);
    os.appendChild(y);
}
var azbuka = document.getElementsByClassName("azbuka");
azbuka[16].innerText = "Z";

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
var tajmer = document.getElementById("tajmer");
var broj = 6,
    b = [],
    b1, x, rec, random, pom;

// ----- IZBOR POJMOVA I POCETAK IGRE -----
for (i = 0; i < skup1.length; i++) {
    skup1[i].addEventListener("click", function() {
        pom = skup1.indexOf(this);
        random = Math.floor(Math.random() * skup[pom].length);
        rec = skup[pom][random];
        x = rec.split("");
        elementi();
        mytajmer();
        polja();
        provera();
        partija();
    });
}

// ----- SKRIVANJE JEDNIH I POJAVLJIVANJE DRUGIH ELEMENATA -----
function elementi() {
    document.getElementById("pojmovi").innerHTML = "";
    document.getElementById("izaberi").setAttribute("class", "obrisi");
    document.getElementById("izabrano").innerText = "IZABRALI STE " + skup2[pom];
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
    for (i = 0; i < 22; i++) {
        azbuka[i].addEventListener("click", function() {
            for (j = 0; j < x.length; j++) {
                if (this.innerText == x[j]) {
                    a[j].innerText = x[j];
                    b[j] = this.innerText;
                }
                if (x[j] == " ") { b[j] = " "; }
            }
            b1 = b.join("");
            this.setAttribute("disabled", "true");
            if (rec.includes(this.innerText) != true) {
                broj--;
                p1[broj].innerText = this.innerText;
            }
            brojac.innerText = broj;
            if (b1 == rec) {
                giveup.parentNode.removeChild(giveup);
                pomoc.parentNode.removeChild(pomoc);
                nova()
                pobeda();
            }
            if (broj == 0) { resenje(); }
            if (broj < 2) { pomoc.setAttribute("disabled", "true"); }
        });
    }
}

// ----- NOVA IGRA -----
function nova() {
    for (i = 0; i < 22; i++) { azbuka[i].setAttribute("disabled", "true"); }
    var x = document.createElement("div");
    x.setAttribute("id", "novaigra");
    x.textContent = "NOVA IGRA";
    x.addEventListener("click", function() {
        window.location.reload();
    });
    var y = document.getElementById("container2");
    y.appendChild(x);
}

// ----- VREME -----
function mytajmer() {
    var t = 59;
    var x = setInterval(function() {
        tajmer.textContent = t;
        t--;
        if (t < 0) {
            clearInterval(x);
            resenje();
        } else if (broj == 0 || b1 == rec) {
            clearInterval(x);
            tajmer.textContent = t + 2;
        }
    }, 1000);
}

// ----- PREDAJEM SE -----
var giveup = document.getElementById("odustajem");
giveup.addEventListener("click", function() {
    for (i = 0; i < x.length; i++) {
        a[i].innerText = x[i];
    }
    b1 = rec;
    giveup.parentNode.removeChild(giveup);
    pomoc.parentNode.removeChild(pomoc);
    poraz();
    nova();
});

// ----- ISPIS REŠENJA -----
function resenje() {
    for (i = 0; i < x.length; i++) {
        a[i].innerText = x[i];
    }
    giveup.parentNode.removeChild(giveup);
    pomoc.parentNode.removeChild(pomoc);
    nova();
    poraz();
}

// ----- DUGME ZA POMOC -----
var pomoc = document.getElementById("pomoc");
pomoc.addEventListener("click", function() {
    for (i = 0; i < 22; i++)
        if (azbuka[i].getAttribute("disabled") != "true" && rec.includes(azbuka[i].innerText)) {
            for (j = 0; j < x.length; j++) {
                if (azbuka[i].innerText == x[j]) {
                    a[j].innerText = x[j];
                    b[j] = azbuka[i].innerText;
                }
                if (x[j] == " ") { b[j] = " "; }
            }
            b1 = b.join("");
            azbuka[i].setAttribute("disabled", "true");
            this.setAttribute("disabled", "true");
            broj--;
            p1[broj].innerText = "*";
            brojac.innerText = broj;
            if (b1 == rec) {
                giveup.parentNode.removeChild(giveup);
                pomoc.parentNode.removeChild(pomoc);
                nova()
                pobeda();
            }
            return;
        }
});

// ----- POBEDA -----
function pobeda() {
    setTimeout(function() {
        document.getElementById("por_pobeda").setAttribute("class", "pp");
    }, 100);
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].ves_por--;
                    x[i].ves_pob++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}

// ----- PORAZ -----
function poraz() {
    setTimeout(function() {
        document.getElementById("por_poraz").setAttribute("class", "pp");
    }, 100);
}

function partija() {
    if (ulogovan_korisnik != null)
        if (ulogovan_korisnik.kor_ime != null) {
            var x = dohvati();
            for (i = 0; i < x.length; i++)
                if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
                    x[i].ves_por++;
                }
            localStorage.setItem("korisnici", JSON.stringify(x));
        }
}