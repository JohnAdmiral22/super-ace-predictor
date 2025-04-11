
let spins = [];
function addSpin() {
  const input = document.getElementById('spinInput');
  const spin = parseInt(input.value);
  if (!isNaN(spin)) {
    spins.push(spin);
    updateList();
    predict();
    input.value = '';
  }
}
function updateList() {
  const list = document.getElementById('spinList');
  list.innerHTML = '';
  spins.forEach((s, i) => {
    const li = document.createElement('li');
    li.textContent = `Spin #${i + 1}: ${s}`;
    list.appendChild(li);
  });
}
function predict() {
  const prediction = document.getElementById('predictionText');
  if (spins.length >= 70) {
    prediction.textContent = 'Malapit na ang scatter bonus!';
  } else {
    prediction.textContent = `Mga ${70 - spins.length} spins pa bago ang bonus. (Approx.)`;
  }
}
