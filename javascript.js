function initialise() {

  var boxNumber = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

  //Added variable to store current Player
  var currentPlayer = "X";

  //this function will execute everytime there is a click on boxes

  for (var i = 0; i < boxNumber.length; i++) {
    document.getElementById(boxNumber[i]).addEventListener("click", executeWhenClick);
  }

  //Extract out the listener function
  function executeWhenClick(event) {
    //check if box is taken


    //check turn cycle if odd display X, if not display O
    currTurn = document.getElementsByTagName("p").length;

    //currTurn %2 !== 0 (Detects if currentTurn is odd)
    //currTurn %2 === 0 (Detects if currentTurn is even)
    if (currTurn % 2 !== 0) { //add condition if box is clicked remove event listener
      event.target.innerHTML = "<p>X</p>";
      currentPlayer = "X";
      // event.target.innerHTML = "<img src='images/x-red.png' />";
      event.target.removeEventListener("click", executeWhenClick);
    } else if (currTurn % 2 === 0) {
      event.target.innerHTML = "<p>O</p>";
      currentPlayer = "O";
      // event.target.innerHTML = "<img src='images/o9.png' />";
      event.target.removeEventListener("click", executeWhenClick);
    }

    //Check for winner first before checking turn
    checkWinner();
    checkTurn();

  }

  function checkTurn() {
    currTurn = document.getElementsByTagName("p").length;
    console.log("currTurn is: " + currTurn);
    if (currTurn % 2 !== 0) {
      document.getElementById("turn").innerText = "Turn: Player 2";
    } else if (currTurn % 2 === 0) {
      document.getElementById("turn").innerText = "Turn: Player 1";
    }
    //else if (currTurn == 9) {
    //   alert('Its a tie!'); //<---- Error cannot determine if it is a tie yet based on currTurn
    //   location.reload();
  // }
  }


  function checkWinner() {
    var idBoxes = [document.getElementById('box1'), document.getElementById('box2'),
                  document.getElementById('box3'), document.getElementById('box4'),
                  document.getElementById('box5'), document.getElementById('box6'),
                  document.getElementById('box7'), document.getElementById('box8'),
                  document.getElementById('box9')];


//Not required to get the ptag
    var cBox1 = idBoxes[0];
    var cBox2 = idBoxes[1];
    var cBox3 = idBoxes[2];
    var cBox4 = idBoxes[3];
    var cBox5 = idBoxes[4];
    var cBox6 = idBoxes[5];
    var cBox7 = idBoxes[6];
    var cBox8 = idBoxes[7];
    var cBox9 = idBoxes[8];


    if ((cBox1.innerHTML === cBox2.innerHTML) && (cBox2.innerHTML === cBox3.innerHTML) && (cBox3.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox4.innerHTML === cBox5.innerHTML) && (cBox5.innerHTML === cBox6.innerHTML) && (cBox6.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox7.innerHTML === cBox8.innerHTML) && (cBox8.innerHTML === cBox9.innerHTML) && (cBox9.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox1.innerHTML === cBox4.innerHTML) && (cBox4.innerHTML === cBox7.innerHTML) && (cBox7.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox2.innerHTML === cBox5.innerHTML) && (cBox5.innerHTML === cBox8.innerHTML) && (cBox8.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox3.innerHTML === cBox6.innerHTML) && (cBox6.innerHTML === cBox9.innerHTML) && (cBox9.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox1.innerHTML === cBox5.innerHTML) && (cBox5.innerHTML === cBox9.innerHTML) && (cBox9.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if ((cBox3.innerHTML === cBox5.innerHTML) && (cBox5.innerHTML === cBox7.innerHTML) && (cBox7.innerHTML !== "")) {
      alert(currentPlayer + ' Wins!');
      location.reload();
    } else if (currTurn === 8){
      alert('Its a tie!');
      location.reload();
    } else{
      console.log("no winner yet");
    }

  }

}
//Ensure thats initialse function  will run only after the page fully load
window.addEventListener("load", initialise, false);


// function checkTurn() {
//
//   //count the turn number by getting number of img in html + 1
//
//   currTurn = document.getElementsByTagName("img").length + 1;
//   //if turn number is odd, player one, if not player 2
//   if (currTurn % 2 == 1) {
//     document.getElementById("turn").innerText = "Turn: Player 1";
//   } else {
//     document.getElementById("turn").innerText = "Turn: Player 2";
//   }
// }
// checkTurn();
