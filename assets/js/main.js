// Arrays 1.1.1

// let adress = ["Strasse 21", "40595", "Düsseldorf", "Nordrhein-Westfalen"];

// let besteFreunde = ["Benny", "Jeong-Soo",];

// let person = ["Alexandr", "Schiwe", "Alex", "28", "Java Script", "Düsseldorf", "Super Code"] + [besteFreunde, adress];

// console.log(adress, besteFreunde, person);

// Arrays 1.1.2

// let person = ["Alexandr", "Schiwe", "Alex", "28", "Java Script", "Düsseldorf", "Super Code"];

// let besteFreunde = ["Benny", "Jeong-Soo",];

// let adress = ["Strasse 21", "40595", "Düsseldorf", "Nordrhein-Westfalen"];

// console.log(adress.length, besteFreunde.length, person.length);

// Arrays 1.2

// let meineTrainer1 = ["Eric", "Steffen", "Simon", "Ahmed",];

// console.log(meineTrainer1);

// let meineTrainer2 = new Array ("Max", "Steffen", "Simon", "Ahmed");

// console.log(meineTrainer2);

// let meineTrainer3 = new Array();
// meineTrainer3[0] = "Eric";
// meineTrainer3[1] = "Steffen";
// meineTrainer3[2] = "Simon";
// meineTrainer3[3] = "Ahmed";

// console.log(meineTrainer3);

// Arrays 1.3 

// let numberArray = [5, 6, 7, 8, 9, 10];
// console.log(numberArray);
// console.log(numberArray[4]);
// console.log(numberArray[0]);
// console.log(numberArray[5]);

// Arrays 1.4

// let meinText1 = "Hallo Welt. Ich wünsche euch allen einen guten Arbeitstag.";
// let meinText2 = "Wie geht es dir heute?";
// let meinText3 = "Heute ist ein großer Tag für uns.";

// // let split1 = meinText1.split('');
// let split1 = meinText1.split(' ');
// let split2 = meinText2.split('');
// let split3 = meinText3.split(" ");

// console.log(meinText1, meinText2, meinText3);
// console.log(split1, split2, split3);

// Arrays 1.5.1

// let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];

// console.log(songs);

// let totalSongs = songs.push("Sweet Child O' Mine", "Crazy Train", "Out of Touch");

// console.log(totalSongs);

// let player = ["Lionel Messi", "Cristiano Ronaldo", "Fußballmann3", "Fußballmann4"];

// console.log(player);

// let keeper = player.push("Torwart1", "Torwart2", "Torwart3");

// console.log(keeper);

// Arrays 1.5.2

// let heroUndEnemy = [["Batman", "The Joker"],["Professor x", "Magneto"],["Thor", "Loki"]];

// heroUndEnemy.push(["Superman", "LexLuthor"], ["Wonder Woman", "Cheetah(Minerva)"])

// console.log(heroUndEnemy);

// Arrays 1.6

// let songs = ["Bohemian Rhapsody", "Stairway to Heaven", "Hotel California"];

// let totalSongs = songs.push("Sweet Child O' Mine", "Crazy Train", "Out of Touch");

// let removed = songs.pop();

// songs.pop();

// console.log(songs);
// console.log(removed);

// Arrays 1.7

// let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quearkkeulchen", "Sauerbraten"];

// deutscheGerichte.unshift(["Blutwurst", "Käsespätzle", "Kartoffelröstis", "Big Mac", "Sushi"]);

// console.log(deutscheGerichte);

// Arrays 1.8 Shift 

// let deutscheGerichte = ["Speckkuchen", "Thüringer Rostbratwurst", "Quearkkeulchen", "Sauerbraten"];

// let nichtGut = deutscheGerichte.shift() + deutscheGerichte.shift() + deutscheGerichte.shift();

// console.log(deutscheGerichte);
// console.log(nichtGut);

// Arrys 1.9 

// let numbers = [23, 54, 75];

// numbers.push([453, 1, 56, 99, 23]);
// numbers.unshift([20, 82, 14, 0, 14]);

// let numbersPop = numbers.pop();

// console.log(numbers);

// let numbers = [23,54,75];
// numbers.push = [453, 1, 56, 99, 23];
// console.log(numbers);
// numbers.unshift(20, 82, 14, 0, 14);
// console.log(numbers);
// let numbersPop = numbers.pop() + numbers.pop() +numbers.pop();
// console.log(numbers);
// numbers.shift();
// console.log(numbers);
// numbers.shift;
// console.log(numbers);

// Arrays 1.12

let array = [
    "imageTeilnehmer000supercode.jpg",
    "imageTeilnehmer001supercode.jpg",
    "imageTeilnehmer002supercode.jpg",
    "imageTeilnehmer003supercode.jpg",
    "imageTeilnehmer004supercode.jpg",
    "imageTeilnehmer005supercode.jpg",
    "imageTeilnehmer006supercode.jpg",
    "imageTeilnehmer007supercode.jpg",
    "imageTeilnehmer008supercode.jpg",
    "imageTeilnehmer009supercode.jpg",
    "imageTeilnehmer010supercode.jpg",
    "imageTeilnehmer011supercode.jpg",
    "imageTeilnehmer012supercode.jpg",
    "imageTeilnehmer013supercode.jpg",
    "imageTeilnehmer014supercode.jpg",
    "imageTeilnehmer015supercode.jpg",
    "imageTeilnehmer016supercode.jpg",
    "imageTeilnehmer017supercode.jpg",
    "imageTeilnehmer018supercode.jpg",
    "imageTeilnehmer019supercode.jpg"
];
let copyImg1 = array.slice(7, 15);

console.log(copyImg1);

// console.log(array);

let copyImg2 = array.slice(6, 12);

console.log(copyImg2);