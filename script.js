// Will require 16 by 16 grid of square divs as default
// Can then also prompt user to change the grid of square divs
// Ideally will allow user to use mouse and draw on the divs
// By default color will be black  
// Will include hovering which changes colour of div
// Will give user the option to select random which will Randomize the colour 
// of the square divs when drawing 

let selectBtn = document.querySelector(".select");
let container = document.querySelector('.containerForBoard');
// Default create 16 by 16 board
  createBoard(16);
// Extract user choice if the select button is clicekd
selectBtn.addEventListener("click", () => {
  let userChoice = +prompt("Enter the size of the board\nNote maximum is 100");
  if (userChoice < 0  || userChoice > 100) {
    alert("Please enter between 0 and 100");
    userChoice = +prompt("Enter the size of the board\nNote maximum is 100");
  }else {
    getUserChoice(userChoice);

  }
  

});

function createBoard(size){
  container.style.cssText = `grid-template-columns: repeat(${size},1fr); grid-template-rows:repeat(${size},1fr);`;
  //Create the divs that will fill the board
  let numberOfDivs = size * size;
  for (let i=0; i<numberOfDivs; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    mouseOver(newDiv);
    
  }
}

function getUserChoice (size) {
  container.style.cssText = `grid-template-columns: repeat(${size},1fr); grid-template-rows:repeat(${size},1fr);`;
  //Create the divs that will fill the board
  let numberOfDivs = size * size;
  for (let i=0; i<numberOfDivs; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    mouseOver(newDiv);
    
  }
}

function mouseOver(newDiv) {
  let blackBtn = document.querySelector(".black");
  blackBtn.addEventListener("click", () => {
    newDiv.addEventListener("mouseover", () => {
      newDiv.style.cssText = "background-color: black";
    });
  

  });


}







