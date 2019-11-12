let input = document.getElementById("input");
let bodyDiv = document.getElementById("body");
let numberRead = document.getElementById("numberRead");
let codeRead = document.getElementById("codeRead");
let keyRead = document.getElementById("keyRead");
let prompt = document.querySelector("p");
let readOutDiv = document.getElementById("readOuts");



function keycode(){
    var keyCd = event.keyCode;
    console.log(keyCd);
    return keyCd;
    }

function code(){
    var code = event.code;
    console.log(code);
    return code;
    }

function which(){
    var key = event.key;
    console.log(key);
    return key;
    }

function readOuts(){
    numberRead.value = keycode();
    codeRead.value = code();
    keyRead.value = which();
    prompt.style.display = "none";
    readOutDiv.style.display = "flex";
}

input.focus();                                  //selects hidden input on load
input.select();



body.addEventListener('click', () => {          //selects hidden input on click anywhere
    input.focus();
    input.select();
})