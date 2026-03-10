function component1() {
    let input = prompt("Enter temperature (30C or 100F):".trim());
    if (!input) return;
    let value = parseFloat(input);
    if (isNaN(value)) { alert("Invalid temperature"); return; }
    if (input.toLowerCase().includes("c")) {
        alert(value + "°C = " + ((value*9/5)+32).toFixed(2) + "°F");
    } else if (input.toLowerCase().includes("f")) {
        alert(value + "°F = " + ((value-32)*5/9).toFixed(2) + "°C");
    } else { alert("Include C or F"); }
}

function component2() {
    let w1 = prompt("Enter word 1:").trim();
    if(!isNaN(w1)) { alert("Invalid letters"); return; }
    let w2 = prompt("Enter word 2:").trim();
    if(!isNaN(w2)) { alert("Invalid letters"); return; }
    switch (true) {
        case w1.length > w2.length: alert(w1 + " is longer"); break;
        case w1.length < w2.length: alert(w2 + " is longer"); break;
        default: alert("Both words same length");
    }
}

function component3() {
    let month = prompt("Enter birth month:").toLowerCase().trim();
    switch(month){
        case "january": alert("Garnet"); break;
        case "february": alert("Amethyst"); break;
        case "march": alert("Aquamarine"); break;
        case "april": alert("Diamond"); break;
        case "may": alert("Emerald"); break;
        case "june": alert("Alexandrite & Pearl"); break;
        case "july": alert("Ruby"); break;
        case "august": alert("Peridot"); break;
        case "september": alert("Sapphire"); break;
        case "october": alert("Opal & Tourmaline"); break;
        case "november": alert("Citrine & Topaz"); break;
        case "december": alert("Blue Zircon & Tanzanite"); break;
        default: alert("Invalid input");
    }
}

function component4() {
    let num1 = parseFloat(prompt("Enter num1:")).trim();
    if(isNaN(num1)) { alert("Invalid number"); return; }
    let num2 = parseFloat(prompt("Enter num2:")).trim();
    let op = prompt("Enter operation (+,-,*,/):");
    switch(op){
        case "+": alert("Sum: "+(num1+num2)); break;
        case "-": alert("Diff: "+(num1-num2)); break;
        case "*": alert("Product: "+(num1*num2)); break;
        case "/": num2===0?alert("Cannot divide by zero"):alert("Div: "+(num1/num2)); break;
        default: alert("Invalid operation");
    }
}

function component5() {
    let u = parseFloat(prompt("Initial velocity (m/s):")).trim();
    if(isNaN(u)) { alert("Invalid number"); return; }
    let v = parseFloat(prompt("Final velocity (m/s):")).trim();
    let t = parseFloat(prompt("Time (s):")).trim();
    if(t===0){ alert("Time cannot be zero"); return; }
    alert("Acceleration: "+((v-u)/t)+" m/s²");
}




