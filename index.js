let who = ["You", "Your friend", "Your mom", "Your dad", "Your sibling"];
let good = ["good", "bad"];
let what = ["test", "day", "party", "game"]
let time = ["today", "tomorrow", "yesterday", "soon", "never"];

function makeMessage() {
    let thePerson = who[Math.floor(Math.random() * who.length)];
    let mood = good[Math.floor(Math.random() * good.length)];
    let verb = "";
    if (thePerson == "You") {
        verb = "are";
    } else {
        verb = "is";
    }
    console.log(`${thePerson} ${verb} ${mood}`);
}

makeMessage();