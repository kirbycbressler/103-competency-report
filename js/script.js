//do damage to opposing player

var opposingCharacterPoints = 100;
var attackPoints = 10;
var ownCharacterPoints = 100;

function start() {
  document.getElementById("start-button").style.display = "none";
  document.getElementById("character-selection-button").style.display = "block";
  document.getElementById("return-to-main").style.display = "block";
  document.getElementById("ready").innerHTML =
    `<p class="main-content" > <b>IM</b> READY!!.. ARE <i>YOU</i> READY? GO INTO FULL SCREEN AND PRESS '<span style="text-decoration:underline">IM READY'!!</p>`;
}
function showCharacters() {
  
  document.getElementById("characters").style.display = "block";
  document.getElementById("character-selection-button").style.display = "none";
}

function characterSelection(character) {
  switch (character) {
    case "Spongebob":
      var characterLink = 'src="https://i.gifer.com/RNSD.gif"';
      break;
      // document.getElementById(
      //   "own"
      // ).innerHTML = `<div id="status"></div>
      //   <img src="https://i.gifer.com/RNSD.gif" alt="spongebob dance" />
      //   <p id="own-character-points" class="points"></p>
      //   <button id="attack-btn" onclick="attack();">Attack</button>
      // </div>`;
      break;
    case "Squidward":
      document.getElementById("own").innerHTML = `<div id="status"></div>
        <img src="#" />
        <p id="own-character-points" class="points"></p>
        <button id="attack-btn" onclick="attack();">Attack</button>
      </div>`;
      break;
  }
}
// document.getElementById("characters").style.display= "flex";
// // create list for character selection with gifs and a class on html where this option button should be shown

// if (character === "Spongebob") {
//   document.getElementById(
//     "own-character-points"
//   ).innerHTML= `<b>Points:</b> ${ownCharacterPoints}`;
// } else {
//   document.getElementById("opposing-character-points").innerHTML = `<b>Points:</b>${opposingCharacterPoints}`;
// }

function attack(character) {
  if (character === "Spongebob") {
    var newPoints = opposingCharacterPoints - attackPoints;
    opposingCharacterPoints = newPoints;
    display();
  }
  if (opposingCharacterPoints <= 0) {
    document.getElementById("attack-btn").style.display = "none";
    document.getElementById(
      "status"
    ).innerHTML = `<h2>YOU WIN</h2><button onclick="restart()">restart</button>`;
  }
}
function restart() {
  opposingCharacterPoints = 100;
  display();
  document.getElementById("attack-btn").style.display = "block";
}
function returnToMain() {
  document.getElementById("return-to-main").style.display = "none";
}