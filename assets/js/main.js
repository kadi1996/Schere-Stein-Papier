// console.log("text");
let rounds5 = document.getElementById('rounds5');
let rounds10 = document.getElementById('rounds10');
let rounds15 = document.getElementById('rounds15');
let rounds20 = document.getElementById('rounds20');
let rock = document.getElementById('r');
let schere = document.getElementById('s');
let papier = document.getElementById('p');
let resultHuman = 0;
let resultComputer = 0;
let resultHumanInput = document.getElementById('resultHuman');
let resultComputerInput = document.getElementById('resultComputer');
let restart;

let submit = (choice) => {
    let randomComputerChoice = Math.floor(Math.random() * 3);
    //Stein = 0, Schere = 1, Papier 2
    if (choice == rock) {
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch (randomComputerChoice) {
            case 0:
                console.log("stein");
                h3.innerHTML = "Nadie gana, hay paridad!";
                break;
            case 1:
                console.log("stein");
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Ganaste!";
                break;
            case 2:
                console.log("stein");
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "Perdíste";
                break;
        }
    }
    else if (choice == schere) {
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch (randomComputerChoice) {
            case 0:
                console.log("schere");
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "La piedra gana a las tijeras. ¡El ordenador ha ganado!";
                break;
            case 1:
                console.log("schere");
                h3.innerHTML = "Hay Paridad!";
                break;
            case 2:
                console.log("schere");
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "Ganaste!";
                break;
        }
    } else if (choice == papier) {
        console.log(rounds5.checked);
        console.log(rounds10.checked);
        console.log(rounds15.checked);
        console.log(rounds20.checked);
        switch (randomComputerChoice) {
            case 0:
                console.log("papier");
                resultHuman++;
                resultHumanInput.innerHTML = resultHuman;
                h3.innerHTML = "El papel gana a la piedra. ¡Has ganado!";
                break;
            case 1:
                console.log("papier");
                resultComputer++;
                resultComputerInput.innerHTML = resultComputer;
                h3.innerHTML = "¡El ordenador ha ganado!";
                break;
            case 2:
                console.log("papier");
                h3.innerHTML = "Hay Paridad!";
                break;
        }
    }
}

let nochmal = () => {
    console.log("text");
    resultComputerInput.innerHTML = 0;
    resultHumanInput.innerHTML = 0;
    h3.innerHTML = "";
}

