let n1 = document.querySelector("#nb1");
let n2 = document.querySelector("#nb2");
let op = document.querySelector("#op");
let calcbtn = document.querySelector("#calcbtn");
let ores = document.querySelector("#res");
let result = document.querySelector("#result");

calcbtn.onclick = function() {
    let res;
    let opr = op.value;
    switch (opr) {
        case "+":
            res = Number(n1.value) + Number(n2.value);
            break;
        case "-":
            res = Number(n1.value) - Number(n2.value);
            break;
        case "*":
            res = Number(n1.value) * Number(n2.value);
            break;
        case "/":
            res = Number(n1.value) / Number(n2.value);
            break;
        case "%":
            res = Number(n1.value) % Number(n2.value);
            break;
    }
    ores.innerHTML = "a nonor ayaghyoul";
    result.style.visibility = "visible";
};
