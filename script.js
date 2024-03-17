const gridDiv = document.getElementById('grid');
for (let i = 0; i < 16; i++) {
  const gridRow = document.createElement('div');
  gridRow.className = 'grid-row';
  gridDiv.appendChild(gridRow);
  for (let j = 0; j < 16; j++) {
    const colElem = document.createElement('div');
    colElem.className = 'grid-item';
    gridRow.appendChild(colElem);
  }
}
console.log('hi');
