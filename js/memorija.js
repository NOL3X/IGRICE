var karte = [{
  'ime': 'kornjaca', 'slika': 'img/kornjaca.png'
}, {
  'ime': 'zvezda', 'slika': 'img/zvezda.png'
}, {
  'ime': 'kljuc', 'slika': 'img/kljuc.png'
}, {
  'ime': 'mario', 'slika': 'img/mario.png'
}, {
  'ime': 'luigi', 'slika': 'img/luigi.png'
}, {
  'ime': 'princeza', 'slika': 'img/princeza.png'
}, {
  'ime': 'zelena', 'slika': 'img/zelena.png'
}, {
  'ime': 'crvena', 'slika': 'img/crvena.png'
}, {
  'ime': 'djavo', 'slika': 'img/djavo.png'
}, {
  'ime': 'metak', 'slika': 'img/metak.png'
}, {
  'ime': 'novcic', 'slika': 'img/novcic.png'
}, {
  'ime': 'zuba', 'slika': 'img/zuba.png'
}];

// ----- MEŠANJE "KARATA" -----
var okvirigre = karte.concat(karte).sort(function () {
  return 0.5 - Math.random();
});
// ----- PROMENLJIVE -----
var prva = '', druga = '', broj = 0, zbir = 0, tajm = 0;
var igra = document.getElementById('igra_memorija');
var okvir = document.createElement('section');
okvir.setAttribute('class', 'okvir');
igra.appendChild(okvir);

// ----- KREIRANJE "KARATA" -----
okvirigre.forEach(function (el) {
  var ime = el.ime;
  var slika = el.slika;
  var karta = document.createElement('div');
  karta.classList.add('karta');
  karta.dataset.name = ime;
  var napred = document.createElement('div');
  napred.classList.add('karta_napred');
  var nazad = document.createElement('div');
  nazad.classList.add('karta_nazad');
  nazad.style.backgroundImage = 'url(' + slika + ')';
  okvir.appendChild(karta);
  karta.appendChild(napred);
  karta.appendChild(nazad);
});

// ----- UKOLIKO SU 2 OTVORENE KARTE ISTE -----
var pogodak = function pogodak() {
  var izabrana = document.querySelectorAll('.izabrana');
  izabrana.forEach(function (karta) {
    karta.classList.add('pogodak');
  });
  zbir += 2;
  if (zbir == 24) {
    pobeda();
  }
};

// ----- UKOLIKO SU 2 OTVORENE KARTE RAZLIČITE -----
var resetuj = function resetuj() {
  prva = '';
  druga = '';
  broj = 0;
  var izabrana = document.querySelectorAll('.izabrana');
  izabrana.forEach(function (karta) {
    karta.classList.remove('izabrana');
  });
};

// ----- PROVERA KARATA KOJE SU IZABRANE -----
okvir.addEventListener('click', function (x) {
  var klik = x.target;
  if (klik.nodeName === 'SECTION' || klik.parentNode.classList.contains('izabrana')
    || klik.parentNode.classList.contains('pogodak')) { return; }
  if (broj < 2) {
    broj++;
    if (broj == 1) {
      prva = klik.parentNode.dataset.name;
      klik.parentNode.classList.add('izabrana');
    } else {
      druga = klik.parentNode.dataset.name;
      klik.parentNode.classList.add('izabrana');
    }
    if (prva && druga) {
      if (prva === druga) {
        setTimeout(pogodak, 1000);
      }
      setTimeout(resetuj, 1000);
    }
  }
  tajm++;
  if (tajm == 1) {
    mytajmer();
  }
});

// ----- VREME -----
var tajmer = document.getElementById("tajmer");
function mytajmer() {
  poraz();
  var t = 89;
  var y = setInterval(function () {
    tajmer.textContent = t;
    t--;
    if (t < 0) {
      setTimeout(function () {
        clearInterval(y);
        window.alert("Poraz :(");
        window.location.reload();
      }, 100);
    }
  }, 1000);
}

// ----- POBEDA -----
function pobeda() {
  if (ulogovan_korisnik != null)
    if (ulogovan_korisnik.kor_ime != null) {
      var x = dohvati();
      for (i = 0; i < x.length; i++)
        if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
          x[i].mem_por--;
          x[i].mem_pob++;
        }
      localStorage.setItem("korisnici", JSON.stringify(x));
    }
  setTimeout(function () {
    window.alert("Pobeda!");
    window.location.reload();
  }, 200);
}

// ----- PORAZ -----
function poraz() {
  if (ulogovan_korisnik != null)
    if (ulogovan_korisnik.kor_ime != null) {
      var x = dohvati();
      for (i = 0; i < x.length; i++)
        if (x[i].kor_ime == ulogovan_korisnik.kor_ime) {
          x[i].mem_por++;
        }
      localStorage.setItem("korisnici", JSON.stringify(x));
    }
}
