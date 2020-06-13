// ЦИКЛЫ
let x = document.querySelector('.Xval');
let n = document.querySelector('.Nval');
let cycle = document.querySelector('.cycle');
let sinus = document.querySelector('.sin');

cycle.onclick = function () {
    let xval = +x.value;
    let nval = +n.value;
    if (nval >= 0) {
        let sum = xval;
        let mark = 1;
        let fact;
        let y = 3;
        let m;
        for (let i = 1; i < nval; i++) {
            fact = 1;
            for (let j = 1; j <= y; j++){
                fact = fact * j;
            }
            mark *= -1;
            m = mark * Math.pow(xval, y) / fact;
            sum += m;
            y += 2;
        }
        sinus.innerHTML = sum.toFixed(3);
    } else {
        alert("Введите положительное число!");
    }
}