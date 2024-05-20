const calculateButton = document.querySelector(".calculate");

function calcImc() {
  const heightCm = parseInt(document.querySelector(".height").value);
  const alturaEnMetros = heightCm / 100;
  const weightKg = parseInt(document.querySelector(".weight").value);
  const result = document.querySelector(".result");

  const imc = Math.round(weightKg / (alturaEnMetros * alturaEnMetros));

  var classification;

  if (heightCm && weightKg) { // Verifica si ambos campos tienen valores
    if (imc < 18.5) {
      classification = "Bajo de peso";
    } else if (imc < 25) {
      classification = "Peso saludable";
    } else if (imc < 30) {
      classification = "Arriba de peso";
    } else if (imc < 35) {
      classification = "Obesidad grado 1";
    } else if (imc < 41) {
      classification = "Obesidad grado 2";
    } else {
      classification = "Obesidad grado 3";
    }

    result.innerHTML = `IMC: ${imc} (${classification})`;
  } else {
    result.innerHTML = "Rellene los campos";
  }
}

calculateButton.addEventListener("click", calcImc);
