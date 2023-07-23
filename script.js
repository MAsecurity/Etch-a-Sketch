let color = 'black';
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
    createBoard(userChoice);

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
  if (color === 'random') {
    // randomize the color of the divs when the random button is clicked
    let randomNumber1 = Math.floor(Math.random() * 256); // returns values 0 to 255
    let randomNumber2 = Math.floor(Math.random() * 256);
    let randomNumber3 = Math.floor(Math.random() * 256);
    this.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
  }else {
    this.style.cssText = "background-color: black";
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


// function mouseOver(newDiv) {
//   let blackBtn = document.querySelector(".black");
//   let resetBtn = document.querySelector(".reset");
//   let randomBtn = document.querySelector(".random")
  
//   // Added a hover class that only changes div colour when it's hovered and stops when it's not.
//   newDiv.classList.add("changeColour");

//   // if black button is clicked, moving over the div will change the color to black
//   blackBtn.addEventListener("click", () => {
//     newDiv.addEventListener("mouseover", () =>{
//       newDiv.style.backgroundColor = "black";

//     });
//   });
//   // reset the values when the reset button is clicked
//   resetBtn.addEventListener("click", () => {
//     newDiv.style.backgroundColor = "#e4e0e0";
//   });


//   // Event listener for the "Randomize Color" button
//   randomBtn.addEventListener("click", () => {
//     newDiv.addEventListener("mouseover", ()=>{
//        // randomize the color of the divs when the random button is clicked
//       let randomNumber1 = Math.floor(Math.random() * 256);
//       let randomNumber2 = Math.floor(Math.random() * 256);
//       let randomNumber3 = Math.floor(Math.random() * 256);
//       div.style.backgroundColor = `rgb(${randomNumber1},${randomNumber2},${randomNumber3})`;
//     });

//   });

// }

