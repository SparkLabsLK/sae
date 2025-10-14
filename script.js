function showTool(toolId) {
  const tools = document.querySelectorAll('.tool-section');
  tools.forEach(tool => {
    tool.style.display = 'none';
  });
  document.getElementById(toolId).style.display = 'block';
}

function calculateCarbon() {
  const distance = parseFloat(document.getElementById('distance').value);
  const emissionFactor = parseFloat(document.getElementById('emissionFactor').value);
  if (isNaN(distance) || isNaN(emissionFactor)) {
    alert('Please enter valid numbers');
    return;
  }
  const result = distance * emissionFactor;
  document.getElementById('carbonResult').innerText = `Estimated Carbon Footprint: ${result.toFixed(2)} kg CO₂`;
}

function calculateFoodMile() {
  const distance = parseFloat(document.getElementById('foodDistance').value);
  const weight = parseFloat(document.getElementById('foodWeight').value);
  const modeFactor = parseFloat(document.getElementById('transportMode').value);
  if (isNaN(distance) || isNaN(weight) || isNaN(modeFactor)) {
    alert('Please enter valid inputs');
    return;
  }
  const result = distance * weight * modeFactor;
  document.getElementById('foodMileResult').innerText = `Estimated Food Mile Emissions: ${result.toFixed(2)} kg CO₂`;
}
