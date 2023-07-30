let selectBtn = document.querySelector(".select");
let container = document.querySelector('.containerForBoard');
// Set a variable click to false
let click = false;

// Set default global colour variable  to black
let color = 'black';

// Default create 16 by 16 board 
createBoard(16);

// click to draw feature
document.querySelector("body").addEventListener("click", function(e) {
  if(e.target.tagName != 'BUTTON') {
    let text = document.querySelector("#draw");
    click = !click;
    if (click) {
      text.textContent = "Drawing enabled";
    }else{
      text.textContent = "Drawing disabled";
    }
  }
  


})

// Extract user choice if the select button is clicked
selectBtn.addEventListener("click", () => {
  let validatedInput = false;
  while(validatedInput === false) {
    let userChoice = prompt("Enter the size of the board\nNote maximum is 100");
    if (userChoice === null || userChoice === '' || isNaN(userChoice) || userChoice < 0 || userChoice > 100){
      alert("You did not enter a valid number between 0 and 100");
      continue;

    }
    else{
      //Break out of loop and convert input to integer and call function createBoard
      validatedInput = true;
      let sizeChosen = +userChoice;
      createBoard(sizeChosen);
    }

  }  

});

function createBoard(size){
  container.style.cssText = `grid-template-columns: repeat(${size},1fr); grid-template-rows:repeat(${size},1fr);`;
  //Create the divs that will fill the board
  let numberOfDivs = size * size;
  for (let i=0; i<numberOfDivs; i++) {
    let newDiv = document.createElement('div');
    container.appendChild(newDiv);
    newDiv.addEventListener("mouseover", colorDiv);
   
  }
}

function colorDiv() {
  if (click) {
    if (color === 'random') {
      // randomize the color of the divs when the random button is clicked
      let randomNumber1 = Math.floor(Math.random() * 256); // returns values 0 to 255
      let randomNumber2 = Math.floor(Math.random() * 256);
      let randomNumber3 = Math.floor(Math.random() * 256);
      this.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
    }else {
      this.style.cssText = "background-color: black";
    }

  }

};

function setColor(colorChoice) {
  color = colorChoice;

}

//Reset all values inside the cotainer
function resetBoard() {
  let allDivs = container.querySelectorAll('div');
  allDivs.forEach(div => {
    div.style.cssText="#e4e0e0";
  });
}




