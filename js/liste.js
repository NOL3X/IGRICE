// ----- KREIRANJE TABELA -----
var ves_pob = document.createElement("table");
var ves_por = document.createElement("table");
var mem_pob = document.createElement("table");
var mem_por = document.createElement("table");
var loto_pob = document.createElement("table");
var loto_por = document.createElement("table");

var x = [], y = [];
function omotac(tab, id, id1, n, z) {
    var m = parseInt(z);
    tab.setAttribute("class", "tabele");
    tab.setAttribute("id", id);
    var naslov = document.createElement("thead");
    naslov.setAttribute("class", "podnaslovi");
    var th = document.createElement("th");
    th.colSpan = z;
    th.innerText = n;
    var omotac = document.getElementById(id1);
    omotac.appendChild(tab);
    tab.appendChild(naslov);
    naslov.appendChild(th);
    for (i = 0; i < 6; i++) {
        x[i] = document.createElement("tr");
        tab.appendChild(x[i]);
        for (j = 0; j < m; j++) {
            y[j] = document.createElement("td");
            y[0].innerText = (i) + ".";
            x[i].appendChild(y[j]);
        }
    }
}
omotac(ves_pob, "vesala_pobede", "omotac_vesala", "NAJVIŠE POBEDA", "3");
omotac(ves_por, "vesala_porazi", "omotac_vesala", "NAJVIŠE PORAZA", "3");
omotac(mem_pob, "memorija_pobede", "omotac_memorija", "NAJVIŠE POBEDA", "3");
omotac(mem_por, "memorija_porazi", "omotac_memorija", "NAJVIŠE PORAZA", "3");
omotac(loto_pob, "loto_pobede", "omotac_loto", "NAJVIŠE POGODAKA", "4");
omotac(loto_por, "loto_porazi", "omotac_loto", "NAJMANJE POGODAKA", "4");

document.querySelector("#vesala_pobede tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ POBEDA</td>';
document.querySelector("#vesala_porazi tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ PORAZA</td>';
document.querySelector("#memorija_pobede tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ POBEDA</td>';
document.querySelector("#memorija_porazi tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ PORAZA</td>';
document.querySelector("#loto_pobede tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ POGOD.</td><td>KOLIKO PUTA</td>';
document.querySelector("#loto_porazi tr:nth-child(2)").innerHTML = '<td colspan="2">IGRAČ</td><td>BROJ POGOD.</td><td>KOLIKO PUTA</td>';

// ----- PROMENLJIVE ZA ISPIS TABELA -----
var vpb_k = [], vpr_k = [], mpb_k = [], mpr_k = [];
var l0 = [], l1 = [], l2 = [], l3 = [], l4 = [], l5 = [], l6 = [], l7 = [];
var d = dohvati();
if (d != null) {
    // ----- ISPIS VEŠALA POBEDE -----
    vpb_k = d.sort(function (a, b) { return a.ves_pob - b.ves_pob }).reverse();
    var td_vpb = document.querySelectorAll("#vesala_pobede td:nth-child(3)");
    var td_vpbk = document.querySelectorAll("#vesala_pobede td:nth-child(2)");
    for (i = 0; i < vpb_k.length && i < 5; i++) {
        if (vpb_k[i].ves_pob == 0)
            continue;
        td_vpb[i].innerText = vpb_k[i].ves_pob;
        td_vpbk[i + 1].innerText = vpb_k[i].kor_ime;
    }
    // ----- ISPIS VEŠALA PORAZI -----
    vpr_k = d.sort(function (a, b) { return a.ves_por - b.ves_por }).reverse();
    var td_vpr = document.querySelectorAll("#vesala_porazi td:nth-child(3)");
    var td_vprk = document.querySelectorAll("#vesala_porazi td:nth-child(2)");
    for (i = 0; i < vpr_k.length && i < 5; i++) {
        if (vpr_k[i].ves_por == 0)
            continue;
        td_vpr[i].innerText = vpr_k[i].ves_por;
        td_vprk[i + 1].innerText = vpr_k[i].kor_ime;
    }
    // ----- ISPIS MEMORIJA POBEDE -----
    mpb_k = d.sort(function (a, b) { return a.mem_pob - b.mem_pob }).reverse();
    var td_mpb = document.querySelectorAll("#memorija_pobede td:nth-child(3)");
    var td_mpbk = document.querySelectorAll("#memorija_pobede td:nth-child(2)");
    for (i = 0; i < mpb_k.length && i < 5; i++) {
        if (mpb_k[i].mem_pob == 0)
            continue;
        td_mpb[i].innerText = mpb_k[i].mem_pob;
        td_mpbk[i + 1].innerText = mpb_k[i].kor_ime;
    }
    // ----- ISPIS MEMORIJA PORAZI -----
    mpr_k = d.sort(function (a, b) { return a.mem_por - b.mem_por }).reverse();
    var td_mpr = document.querySelectorAll("#memorija_porazi td:nth-child(3)");
    var td_mprk = document.querySelectorAll("#memorija_porazi td:nth-child(2)");
    for (i = 0; i < mpr_k.length && i < 5; i++) {
        if (mpr_k[i].mem_por == 0)
            continue;
        td_mpr[i].innerText = mpr_k[i].mem_por;
        td_mprk[i + 1].innerText = mpr_k[i].kor_ime;
    }
    // ----- ISPIS LOTO - NAJVIŠE POGODAKA -----
    var td7 = document.querySelectorAll("#loto_pobede td:last-child");
    var tdk7 = document.querySelectorAll("#loto_pobede td:nth-child(2)");
    var tdb7 = document.querySelectorAll("#loto_pobede td:nth-child(3)");
    var j = 0, k = 0, h = 0;
    l7 = d.sort(function (a, b) { return a.loto7 - b.loto7 }).reverse();
    for (i = 0; i < l7.length && i < 5; i++) {
        if (l7[i].loto7 == 0)
            continue;
        td7[i + 1].innerText = l7[i].loto7;
        tdk7[i + 1].innerText = l7[i].kor_ime;
        tdb7[i + 1].innerText = '" 7 "';
        j++;
    }
    l6 = d.sort(function (a, b) { return a.loto6 - b.loto6 }).reverse();
    if (j < 5)
        for (i = 0; i < l6.length && i < (5 - j); i++) {
            if (l6[i].loto6 == 0)
                continue;
            td7[i + 1 + j].innerText = l6[i].loto6;
            tdk7[i + 1 + j].innerText = l6[i].kor_ime;
            tdb7[i + 1 + j].innerText = '" 6 "';
            k++;
        }
    l5 = d.sort(function (a, b) { return a.loto5 - b.loto5 }).reverse();
    if (k < (5 - j))
        for (i = 0; i < l5.length && i < (5 - j - k); i++) {
            if (l5[i].loto5 == 0)
                continue;
            td7[i + 1 + j + k].innerText = l5[i].loto5;
            tdk7[i + 1 + j + k].innerText = l5[i].kor_ime;
            tdb7[i + 1 + j + k].innerText = '" 5 "';
            h++;
        }
    l4 = d.sort(function (a, b) { return a.loto4 - b.loto4 }).reverse();
    if (h < (5 - j - k))
        for (i = 0; i < l4.length && i < (5 - j - k - h); i++) {
            if (l4[i].loto4 == 0)
                continue;
            td7[i + 1 + j + k + h].innerText = l4[i].loto4;
            tdk7[i + 1 + j + k + h].innerText = l4[i].kor_ime;
            tdb7[i + 1 + j + k + h].innerText = '" 4 "';
        }
    // ----- ISPIS LOTO - NAJMANJE POGODAKA -----
    var td0 = document.querySelectorAll("#loto_porazi td:last-child");
    var tdk0 = document.querySelectorAll("#loto_porazi td:nth-child(2)");
    var tdb0 = document.querySelectorAll("#loto_porazi td:nth-child(3)");
    var p = 0, q = 0, r = 0;
    l0 = d.sort(function (a, b) { return a.loto0 - b.loto0 }).reverse();
    for (i = 0; i < l0.length && i < 5; i++) {
        if (l0[i].loto0 == 0)
            continue;
        td0[i + 1].innerText = l0[i].loto0;
        tdk0[i + 1].innerText = l0[i].kor_ime;
        tdb0[i + 1].innerText = '" 0 "';
        p++;
    }
    l1 = d.sort(function (a, b) { return a.loto1 - b.loto1 }).reverse();
    if (p < 5)
        for (i = 0; i < l1.length && i < (5 - p); i++) {
            if (l1[i].loto1 == 0)
                continue;
            td0[i + 1 + p].innerText = l1[i].loto1;
            tdk0[i + 1 + p].innerText = l1[i].kor_ime;
            tdb0[i + 1 + p].innerText = '" 1 "';
            q++;
        }
    l2 = d.sort(function (a, b) { return a.loto2 - b.loto2 }).reverse();
    if (q < (5 - p))
        for (i = 0; i < l2.length && i < (5 - p - q); i++) {
            if (l2[i].loto2 == 0)
                continue;
            td0[i + 1 + p + q].innerText = l2[i].loto2;
            tdk0[i + 1 + p + q].innerText = l2[i].kor_ime;
            tdb0[i + 1 + p + q].innerText = '" 2 "';
            r++;
        }
    l3 = d.sort(function (a, b) { return a.loto3 - b.loto3 }).reverse();
    if (r < (5 - p - q))
        for (i = 0; i < l3.length && i < (5 - p - q - r); i++) {
            if (l3[i].loto3 == 0)
                continue;
            td0[i + 1 + p + q + r].innerText = l3[i].loto3;
            tdk0[i + 1 + p + q + r].innerText = l3[i].kor_ime;
            tdb0[i + 1 + p + q + r].innerText = '" 3 "';
        }
}