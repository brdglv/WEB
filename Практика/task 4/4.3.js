// МАТРИЦА
let random = document.querySelector('.random');
let order = document.querySelector('.order');
let arr = [];

random.onclick = function () {
    for (let i = 0; i < 8; i++) {
        arr[i] = [];
        for (let j = 0; j < 8; j++) {
            arr[i][j] = Math.round(Math.random() * 100);
        }
    }
    let html = '<table>';
    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('table').innerHTML = html;
}

order.onclick = function () {
    for (let i = 0; i < 8; i++) { 
        let tmp = [];
        for (j = 0; j < 8; j++) {
            tmp.push(arr[i][j]);
        }
        tmp = tmp.sort(function (a, b) {return a - b});
        for (j = 0; j < 8; j++) {
            arr[i][j] = tmp[j];
        }
    }
    let html = '<table>';
    for (let i = 0; i < 8; i++) {
        html += '<tr>';
        for (let j = 0; j < 8; j++) {
            html += '<td>' + arr[i][j] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    document.getElementById('table').innerHTML = html;
}