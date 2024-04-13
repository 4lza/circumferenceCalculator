const PI = 3.14159;
let radius;

document.getElementById("p").textContent = "enter the radius of a circle in cm:";


document.getElementById("btn").onclick = function() {
    let radius = document.getElementById("txt").value
    radius = Number(radius);
    const CIRCUMFERENCE = Math.round((2 * PI * radius)* 10)/ 10;

    let isNumber = typeof(radius)

    if(isNaN(radius)) {
        document.getElementById("answer").textContent = `you did not provide a number`;
    } else {
        document.getElementById("answer").textContent = `the circumference is: ${CIRCUMFERENCE}cm`;
    }
}
 