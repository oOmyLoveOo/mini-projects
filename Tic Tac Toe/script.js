const values = document.querySelectorAll(".grid-item");
const reset = document.querySelector(".reset")
const gameStatus = document.querySelector(".game-status")
let isPlayerO = true;
let board = [];
const zero = {
  tagName: "i",
  classNames: ["fa-solid", "fa-o"],
};
const cross = {
  tagName: "i",
  classNames: ["fa-solid", "fa-x"],
};

function createIcon(iconData) {
  const element = document.createElement(iconData.tagName);
  iconData.classNames.forEach((className) => {
    element.classList.add(className);
  });
  return element;
}

function currentStatus(){
  if (!isPlayerO){
    gameStatus.textContent = "It's X turn";
  }else{
    gameStatus.textContent = "It's O turn";
  }
}

values.forEach((value) => {
  value.addEventListener("click", (e) => {
    let cell = e.currentTarget;
    if (!cell.children.length) {
      let icon = isPlayerO ? createIcon(zero) : createIcon(cross);
      cell.appendChild(icon);
      isPlayerO = !isPlayerO; // Switch players
      currentStatus();
    }
  });
});

reset.addEventListener("click", () => {
  window.location.reload();
});




