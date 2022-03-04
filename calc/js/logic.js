let text = "";
let count1 = 0;
function pb(x) {
    x = x.toString();
    if(x == '+' || x == '-' || x == '*' || x == '/'){
    count1 = 1;
    }
    if (text.length == 0 && x != '+' && x != '*' && x != '/' && x != '!' ||text.length > 0) {
        if(text[text.length-1] != '+' && text[text.length-1] != '-' && text[text.length-1] != '*' && text[text.length-1] != '/' || x != '+' && x != '-' && x != '*' && x != '/'){
            if(x == '!' && count1 == 0 || x != '!'){
            text += x;
            document.getElementById("result").innerHTML = text;
            }
        }
    }
}
function r() {
    if (text.indexOf("/0") > -1)
        document.getElementById("r").innerHTML = "לא ניתן לחלק באפס";
    else if (text[text.length-1] == '!') {
        let newtext = text.substring(0, text.length-1);
        azeret(newtext);
    }
    else
        document.getElementById("r").innerHTML = eval(text);
}
function clean() {
    text = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("r").innerHTML = "";
}
function azeret(x) {
    let y = parseInt(x);
    for (let i = x - 1; i > 0; i--) {
        y *= i;
    }
    document.getElementById("r").innerHTML = y;
}
function dd(){
    text = text.substring(0,text.length-1);
    document.getElementById("result").innerHTML = text;
}
window.addEventListener('keypress',(e) => {
    if(e.key != "Enter"){
    text += e.key;
    document.getElementById("result").innerHTML = text;
    }
    else if(e.key == "Enter"){
    r();
    }
})
