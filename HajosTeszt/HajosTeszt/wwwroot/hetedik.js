window.onload = () => {
    letöltés();

}


var kérdések;
var kérdésSzáma = 0;


var letöltés = function () {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data))
};

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés");
    console.log(d);
    kérdések = d;
    kérdésMegjelenítés(0);
}

function kérdésMegjelenítés(kérdés) {

    let kérdés_szöveg = document.getElementById("kérdés_szöveg");
    kérdés_szöveg.innerHTML = kérdések[kérdés].questionText;

    for (var i = 1; i < 4; i++) {
        let válasz = document.getElementById("válasz" + i);
        válasz.innerText = kérdések[kérdés]["answer" + i];
    }
    if (kérdések[kérdés].image != "") {
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdések[kérdés].image;
        document.getElementById("kép1").style.visibility = 'visible';

    }
    else {
        document.getElementById("kép1").style.visibility = 'hidden';
    }

    document.getElementById("gomb1").onclick = function Vissza() {
        visszaszín();
        if (kérdés == 0) {
            kérdésMegjelenítés(2);
        }
        else {
            kérdésMegjelenítés(kérdés - 1);
        }
    }

    document.getElementById("gomb2").onclick = function Előre() {
        visszaszín();
        if (kérdés == 2) {
            kérdésMegjelenítés(0);
        }
        else {
            kérdésMegjelenítés(kérdés + 1);
        }
    }

    document.getElementById("válasz1").onclick = function válasz1() {
        if (kérdések[kérdés].correctAnswer == 1) {
            document.getElementById("válasz1").style.backgroundColor = "green";
        }
        else {
            document.getElementById("válasz1").style.backgroundColor = "red";
        }
    }
        document.getElementById("válasz2").onclick = function válasz2() {
            if (kérdések[kérdés].correctAnswer == 2) {
                document.getElementById("válasz2").style.backgroundColor = "green";
            }
            else {
                document.getElementById("válasz2").style.backgroundColor = "red";
            }
        }
        document.getElementById("válasz3").onclick = function válasz3() {
            if (kérdések[kérdés].correctAnswer == 3) {
                document.getElementById("válasz3").style.backgroundColor = "green";
            }
            else {
                document.getElementById("válasz3").style.backgroundColor = "red";
            }
        }

        function visszaszín() {
            document.getElementById("válasz1").style.backgroundColor = '#FFFFFF';
            document.getElementById("válasz2").style.backgroundColor = '#FFFFFF';
            document.getElementById("válasz3").style.backgroundColor = '#FFFFFF';
        }
    

}