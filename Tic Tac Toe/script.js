const values = document.querySelectorAll(".grid-item");
const reset = document.querySelector(".reset")
const gameStatus = document.querySelector(".game-status")
let isPlayerO = true;

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
  if (checkWinner()) {
    // El ganador será el que NO está en isPlayerO porque ya cambiamos el turno
    const winner = !isPlayerO ? "O" : "X";
    gameStatus.textContent = `¡${winner} ha ganado!`;
    return;
  }
  if (ckeckDraw()){
    gameStatus.textContent = "¡Empate!";
    return;
  }
  if (!isPlayerO){
    gameStatus.textContent = "It's X turn";
  }else{
    gameStatus.textContent = "It's O turn";
  }
}

values.forEach((value) => {
  value.addEventListener("click", (e) => {
    // Si ya hay ganador, no permitir más movimientos
    if (checkWinner()) {
      return;
    }
    // Verifica si la celda está vacía
    if (!e.target.hasChildNodes()) {
      // Crea el icono y lo añade directamente
      const icon = isPlayerO ? createIcon(zero) : createIcon(cross);
      e.target.appendChild(icon);
      isPlayerO = !isPlayerO;
      currentStatus();
    }
  });
});

function checkWinner() {
  const combos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontales
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // verticales
    [0, 4, 8], [2, 4, 6]             // diagonales
  ];
  
  return combos.some(([a, b, c]) => 
    values[a].innerHTML.length &&
    values[a].innerHTML === values[b].innerHTML &&
    values[a].innerHTML === values[c].innerHTML
  );
}

function ckeckDraw(){
  return [...values].every((value) => value.innerHTML.length > 0);
}

reset.addEventListener("click", () => {
  window.location.reload();
});