const gridDiv = document.getElementById('grid');
let gridNum = 16;
function generateRGB(a) {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgba = `rgb(${red},${green},${blue},${a})`;
  return rgba;
}
function makeSketch(num) {
  for (let i = 0; i < num; i++) {
    const gridRow = document.createElement('div');
    gridRow.className = 'grid-row';
    gridDiv.appendChild(gridRow);
    for (let j = 0; j < num; j++) {
      const colElem = document.createElement('div');
      colElem.className = 'grid-item';
      gridRow.appendChild(colElem);
    }
  }
  const gridItems = document.querySelectorAll('.grid-item');
  let counter = 0.1;
  gridItems.forEach(el =>
    el.addEventListener('mouseover', event => {
      event.preventDefault();
      el.style.backgroundColor = generateRGB(counter);
      counter += 0.1;
      if (counter === 1) {
        counter = 1;
      }
    })
  );
}

const button = document.getElementById('btn-prmt');
button.addEventListener('click', event => {
  event.preventDefault();
  const userInput = Number(prompt('Enter the grid size:'));
  console.log(typeof userInput);
  if (!(typeof userInput === 'number' && userInput > 100)) {
    gridDiv.textContent = '';
    makeSketch(userInput);
  }
});
makeSketch(16);
