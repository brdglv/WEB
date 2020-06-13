// ПЛОЩАДЬ
let height = document.querySelector('.height');
let width = document.querySelector('.width');
let ellipse = document.querySelector('.ellipse');
let square_ellipse = document.querySelector('.square-ellipse');

ellipse.onclick = function () {
    let heightB = +height.value;
    let widthA = +width.value;
    if (widthA < 0 || heightB < 0) {
        alert("Введите положительное число!");
    } else {
        square_ellipse.innerHTML = widthA * heightB * Math.PI.toFixed(3);
    }
}


