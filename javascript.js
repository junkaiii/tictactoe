function initialise() {

  var boxNumber = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6', 'box7', 'box8', 'box9'];

  //removed function box1 as not required

  //Add event listener to box1
  //this function will execute everytime there is a click on boxes

  for (var i = 0; i < boxNumber.length; i++) {
    document.getElementById(boxNumber[i]).addEventListener("click", executeWhenClick);
  }
  // document.getElementById("box1").addEventListener("click", executeWhenClick);
  // document.getElementById("box2").addEventListener("click", executeWhenClick);

  //Extract out the listener function
  function executeWhenClick(event) {
    //check if box is taken


    //check turn cycle if odd display X, if not display O
    currTurn = document.getElementsByTagName("p").length;
    if (currTurn % 2 == 1) { //add condition if box is clicked remove event listener
      event.target.innerHTML = "<p>X</p>";
      // event.target.innerHTML = "<img src='images/x-red.png' />";
      event.target.removeEventListener("click", executeWhenClick);
    } else if (currTurn % 2 === 0) {
      event.target.innerHTML = "<p>O</p>";
      // event.target.innerHTML = "<img src='images/o9.png' />";
      event.target.removeEventListener("click", executeWhenClick);
    }


    // event.target.innerHTML = "<img src='images/x-red.png' />";
    //call all other functions you want to execute
    checkTurn();
    checkWinner();


  }

  function checkTurn() {
    currTurn = document.getElementsByTagName("p").length;
    console.log("currTurn is: " + currTurn);
    if (currTurn % 2 == 1) {
      document.getElementById("turn").innerText = "Turn: Player 2";
    } else if (currTurn % 2 === 0) {
      document.getElementById("turn").innerText = "Turn: Player 1";
    } else if (currTurn == 9) {
      alert('Its a tie!');
      location.reload();
    }
  }


  function checkWinner() {
    var idBoxes = [document.getElementById('box1'), document.getElementById('box2'), document.getElementById('box3'), document.getElementById('box4'), document.getElementById('box5'), document.getElementById('box6'), document.getElementById('box7'), document.getElementById('box8'), document.getElementById('box9')];
    // var one = document.getElementById('box1');
    // var two = document.getElementById('box2');
    // var three = document.getElementById('box3');
    // var four = document.getElementById('box4');
    // var five = document.getElementById('box5');
    // var six = document.getElementById('box6');
    // var seven = document.getElementById('box7');
    // var eight = document.getElementById('box8');
    // var nine = document.getElementById('box9');


    // var checkO = function() {
    //   if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[1].getElementsByTagName('p')[0].innerHTML && idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[3].getElementsByTagName('p')[0].innerHTML && idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[6].getElementsByTagName('p')[0].innerHTML && idBoxes[6].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[2].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    // }
    //
    // var checkX = function() {
    //   if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[1].getElementsByTagName('p')[0].innerHTML && idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[3].getElementsByTagName('p')[0].innerHTML && idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[6].getElementsByTagName('p')[0].innerHTML && idBoxes[6].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[2].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'O' ) {
    //     alert('O Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[1].getElementsByTagName('p')[0].innerHTML && idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[3].getElementsByTagName('p')[0].innerHTML && idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[6].getElementsByTagName('p')[0].innerHTML && idBoxes[6].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[1].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[2].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[3].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[5].getElementsByTagName('p')[0].innerHTML && idBoxes[5].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[7].getElementsByTagName('p')[0].innerHTML && idBoxes[7].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[0].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[8].getElementsByTagName('p')[0].innerHTML && idBoxes[8].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   } else if (idBoxes[6].getElementsByTagName('p')[0].innerHTML === idBoxes[4].getElementsByTagName('p')[0].innerHTML && idBoxes[4].getElementsByTagName('p')[0].innerHTML === idBoxes[2].getElementsByTagName('p')[0].innerHTML && idBoxes[2].getElementsByTagName('p')[0].innerHTML == 'X' ) {
    //     alert('X Wins!');
    //     event.target.removeEventListener("click", executeWhenClick);
    //     location.reload();
    //   }
    //
    // };

    var cBox1 = idBoxes[0].getElementsByTagName('p')[0];
    var cBox2 = idBoxes[1].getElementsByTagName('p')[0];
    var cBox3 = idBoxes[2].getElementsByTagName('p')[0];
    var cBox4 = idBoxes[3].getElementsByTagName('p')[0];
    var cBox5 = idBoxes[4].getElementsByTagName('p')[0];
    var cBox6 = idBoxes[5].getElementsByTagName('p')[0];
    var cBox7 = idBoxes[6].getElementsByTagName('p')[0];
    var cBox8 = idBoxes[7].getElementsByTagName('p')[0];
    var cBox9 = idBoxes[8].getElementsByTagName('p')[0];


    if (cBox1.innerHTML === "O" && cBox2.innerHTML === "O" && cBox3.innerHTML === "O") {
      alert('O Wins!');
      event.target.removeEventListener("click", executeWhenClick);
      location.reload();
    } else if (cBox1.innerHTML === "O" && cBox4.innerHTML === "O" && cBox7.innerHTML === "O") {
      alert('O Wins!');
      event.target.removeEventListener("click", executeWhenClick);
      location.reload();
    } else if (cBox4.innerHTML === "O" && cBox5.innerHTML === "O" && cBox6.innerHTML === "O") {
      alert('O Wins!');
      event.target.removeEventListener("click", executeWhenClick);
      location.reload();
    // } else if (cBox7.innerHTML === "O" && cBox8.innerHTML === "O" && cBox9.innerHTML === "O") {
    //   alert('O Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox2.innerHTML === "O" && cBox5.innerHTML === "O" && cBox8.innerHTML === "O") {
    //   alert('O Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox3.innerHTML === "O" && cBox6.innerHTML === "O" && cBox9.innerHTML === "O") {
    //   alert('O Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox1.innerHTML === "O" && cBox5.innerHTML === "O" && cBox9.innerHTML === "O") {
    //   alert('O Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox7.innerHTML === "O" && cBox5.innerHTML === "O" && cBox3.innerHTML === "O") {
    //   alert('O Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox1.innerHTML === "X" && cBox2.innerHTML === "X" && cBox3.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox1.innerHTML === "X" && cBox4.innerHTML === "X" && cBox7.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox4.innerHTML === "X" && cBox5.innerHTML === "X" && cBox6.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox7.innerHTML === "X" && cBox8.innerHTML === "X" && cBox9.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox2.innerHTML === "X" && cBox5.innerHTML === "X" && cBox8.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox3.innerHTML === "X" && cBox6.innerHTML === "X" && cBox9.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox1.innerHTML === "X" && cBox5.innerHTML === "X" && cBox9.innerHTML === "X") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
    // } else if (cBox7.innerHTML === "O" && cBox5.innerHTML === "O" && cBox3.innerHTML === "O") {
    //   alert('X Wins!');
    //   event.target.removeEventListener("click", executeWhenClick);
    //   location.reload();
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
