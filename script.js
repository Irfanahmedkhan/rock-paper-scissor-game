var img1 = document.getElementById("rockimg");
var img2 = document.getElementById("paperimg");
var img3 = document.getElementById("scissorimg");

function computerchoice() {
  var myimages = ["rock.jpg", "paper.jpg", "scissor.jpg"];
  var ry = Math.floor(Math.random() * myimages.length);

  computer = document.createElement("img");
  computer.setAttribute("class", "resultimg");

  computer.src = myimages[ry];
  if (myimages[ry] == "rock.jpg") {
    computer.setAttribute("id", "rockimg");
  } else if (myimages[ry] == "paper.jpg") {
    computer.setAttribute("id", "paperimg");
  } else if (myimages[ry] == "scissor.jpg") {
    computer.setAttribute("id", "scissorimg");
  }

  result.appendChild(computer);
}

function userselect(userselection, userid) {
  user = document.createElement("img");
  user.setAttribute("class", "resultimg");
  user.setAttribute("id", userid);
  user.src = userselection;
  result.appendChild(user);
}

function win() {
  var win = document.createElement("h2");
  win.appendChild(document.createTextNode("You Win"));
  result.appendChild(win);
}

function lose() {
  var lose = document.createElement("h2");
  lose.appendChild(document.createTextNode("You Lose!"));
  result.appendChild(lose);
}
function draw() {
  var draw = document.createElement("h2");
  draw.appendChild(document.createTextNode("Draw!"));
  result.appendChild(draw);
}

function finalresult() {
  if (user.id === "paperimg" && computer.id === "rockimg") {
    win();
  } else if (user.id === "paperimg" && computer.id === "paperimg") {
    draw();
  } else if (user.id === "paperimg" && computer.id === "scissorimg") {
    lose();
  } else if (user.id === "rockimg" && computer.id === "rockimg") {
    draw();
  } else if (user.id === "rockimg" && computer.id === "paperimg") {
    lose();
  } else if (user.id === "rockimg" && computer.id === "scissorimg") {
    win();
  } else if (user.id === "scissorimg" && computer.id === "scissorimg") {
    draw();
  } else if (user.id === "scissorimg" && computer.id === "rockimg") {
    lose();
  } else if (user.id === "scissorimg" && computer.id === "paperimg") {
    win();
  }
}

img1.addEventListener("click", function () {
  userselect("rock.jpg", "rockimg");
  computerchoice("rockimg");
  finalresult();
});

img2.addEventListener("click", function () {
  userselect("paper.jpg", "paperimg");
  computerchoice("paperimg");
  finalresult();
});

img3.addEventListener("click", function () {
  userselect("scissor.jpg", "scissorimg");
  computerchoice();
  finalresult();
});
