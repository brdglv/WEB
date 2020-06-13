// ФУНКЦИИ
let Min = document.querySelector(".min");
let Max = document.querySelector(".max");
let N = document.querySelector(".n")

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min - 1) + min);
}

function getArray(n) {

    let min = +Min.value;
    let max = +Max.value;

    if (min >= max) {
        alert("Min должен быть меньше Max");
        return;
    }

    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = getRandomInt(min, max);
    }

    return arr;
}

function getResultArray(arr) {

    let sortedArr = arr.slice();

    for (let i = 0; i < sortedArr.length - 1; i++) {
        for (let j = 0; j < sortedArr.length - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                let temp = sortedArr[j];
                sortedArr[j] = sortedArr[j + 1];
                sortedArr[j + 1] = temp;
            }
        }
    }

    return sortedArr;
}

function genAndSortArray() {

    let n = +N.value;

    let arr = getArray(n);
    let sortedArray = getResultArray(arr).join(" ")
    document.querySelector(".generatedArray").value = arr.join(" ");
    document.querySelector(".sortedArray").value = sortedArray;
    document.querySelector(".array").value = sortedArray;
}

function makeArray() {

    let data = document.querySelector(".array").value.trim();

    data = data.split(" ");
    if (!Number.isInteger(Math.sqrt(data.length))) {
        alert("Количество элементов должно быть квадратом числа");
        return;
    }

    data = getResultArray(data.map(x => +x));

    let n = Math.sqrt(data.length);
    let A = [];
    for (let i = 0; i < n; i++) {
        A[i] = [];
    }

    let index = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 0) {
            for (let j = 0; j < n; j++) {
                A[j][i]  = data[index++];
            }
        } else {
            for (let j = n - 1; j >= 0; j--) {
                A[j][i] = data[index++];
            }
        }
    }

    let html = "<table>";
    for (let i = 0; i < n; i++) {
        html += "<tr>";
        for (let j = 0; j < n; j++) {
            html += "<td>" + A[i][j] + "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    document.querySelector(".snakeArray").innerHTML = html;
}
