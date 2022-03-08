let data = document.getElementById("data");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
button.addEventListener("click", (e) => {
    switch(e.target.innerText){
        case "AC":
            data.innerText = "";
            break;
        case "=":
            try{
                data.innerText = eval(data.innerText);
            } catch {
                data.innerText = "Virhe"
            }
            break;
        case "←":
            if (data.innerText){
               data.innerText = data.innerText.slice(0, -1);
            }
            break;
        default:
            data.innerText += e.target.innerText;
        }
    });
});
