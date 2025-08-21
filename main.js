function changeUnit(unit){
    const text = document.getElementById("sampleText");
    const explanation = document.getElementById("explanation");

    switch(unit){
        case "em": text.style.fontSize = "2em";
        explanation.innerText = "💡 1em = current elements font size, 2em = 2x the current font size";
        break;

        case "rem": text.style.fontSize = "2rem";
        explanation.innerText = "💡 1rem = root elements font size. 2rem = 2x the root font size";
        break;

        case "vh": text.style.fontSize = "5vh";
        explanation.innerText = "5vh = 5% of viewport height";
        break;

        case "vw": text.style.fontSize = "5vw";
        explanation.innerText = "5vw = 5% of viewport width";
        break;
    }
}