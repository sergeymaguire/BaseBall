var inquirer = require("inquirer"),
    sumOffensive = 0,
    num1 = Math.floor((Math.random() * 20) + 1),
    num2 = Math.floor((Math.random() * 20) + 1),
    counter = 0,
    Baseballplayers = [],
    flipdacoin = Math.random();
function Player(name, position, offense, defense) {
    this.name = name;
    this.position = position;
    this.offense = offense;
    this.defense = defense;
    this.trashGame = function () {
        if (flipdacoin == 1) {
            this.offense += 1;
        } else {
            this.defense += 1
        }
    };
    this.ballingGame = function () {
        if (flipdacoin == 1) {
            this.offense += 1;
        } else {
            this.defense += 1
        }
    }
    this.printStats = function () {
        console.log("Name: " + this.name + "\nPosition: " + this.position + "\noffense: " + this.offense + "\ndefense: " + this.defense);
    };
}
var playDaGame = function () {
    console.log("New score: " + num1) + "\n" + console.log("New score: " + num2)
}

var askQuestions = function () {
    if (counter < 1) {
        console.log("NEW PLAYER");
        inquirer.prompt([{
            name: "name",
            message: "Players name?"
        }, {
            name: "position",
            message: "What is your position?"
        }, {
            name: "defense",
            message: "Defense score?"
        }, {
            name: "offense",
            message: "Offense score"
        }]).then(function (answers) {
            var pushBballPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
            Baseballplayers.push(pushBballPlayer);
            counter++;
            askQuestions();
        });
    } else {
        for (var i = 0; i < Baseballplayers.length; i++) {
            Baseballplayers[i].printStats();
            playDaGame();
        }
        var sumOffense = function () {
            for (i = 0; i < Baseballplayers.length; i++) {
                if (Baseballplayers[i].position == "starter") {
                    sumOffensive = sumOff + Baseballplayers[i].offense;
                }
            }
        }
    }
} 
askQuestions();