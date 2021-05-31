var attackPoints = 10;
var characterPoints = 100;
function attack() {

  characterPoints = characterPoints - attackPoints;
  if (characterPoints > 0) {
    document.getElementById("opposing-character-points").innerHTML = `Health: ${characterPoints}`;
  } else {
    document.getElementById("opponent").innerHTML = `<img src='/img/squidward-lose.gif'/> 
    <p class="center-on-screen"><a href="../index.html">WINNER</a></p>`;
  }
}
function attack2() {
  characterPoints = characterPoints - attackPoints;
  if (characterPoints > 0) {
    document.getElementById(
      "opposing-character-points"
    ).innerHTML = `Health: ${characterPoints}`;
  } else {
    document.getElementById(
      "opponent"
    ).innerHTML = `<img src='/img/spongebob-lose.gif'/> 
    <p class="center-on-screen"><a href="../index.html">WINNER</a></p>`;
  }
} 