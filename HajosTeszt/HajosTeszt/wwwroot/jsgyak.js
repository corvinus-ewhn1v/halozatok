window.onload = function () {
    console.log("betöltődött")
}

var faktoriális = function (sor) {
    let er = 1;
    for (let i = 2; i <= sor; i++) {
        er = er * i;
    }
    return er;
}

var faktoriálisR = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * faktoriálisR(n - 1)
    }
}

var kirakás = function () {
    let hova = document.getElementById("ide");
    for (var s = 1; s < 11; s++) {
        let sor = document.createElement("div");
        hova.appendChild(sor);
        sor.innerText = s
        sor.style.background = `rgb(${20 + (20 * s)},0,0)`;
    }
}

var pascal = function () {
    let merre = document.getElementById("pascal");
    for (var i = 0; i < 10; i++) {
        let sor = document.createElement("div");
        merre.appendChild(sor);
        sor.classList.add("sor");
        for (var l = 0; l <= i; l++) {
            let oszlop = document.createElement("div");
            sor.appendChild(oszlop);
            oszlop.innerText = faktoriálisR(i) / (faktoriálisR(l) * (faktoriálisR(i - l)));
            oszlop.classList.add("doboz");
            oszlop.innerHTML = `${i}: ${l}`;
        }
    }
}
