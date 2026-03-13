document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("imcForm");
    const valorImc = document.getElementById("valorImc");
    const clasificacion = document.getElementById("clasificacion");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value);
        const altura = parseFloat(document.getElementById("altura").value);

        if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
            valorImc.textContent = "Por favor, introduce valores válidos.";
            clasificacion.textContent = "";
            clasificacion.className = "";
            return;
        }

        const imc = peso / (altura * altura);
        const imcRedondeado = imc.toFixed(2);
        valorImc.textContent = `Tu IMC es: ${imcRedondeado}`;

        let textoClasificacion = "";
        let clase = "";

        if (imc < 18.5) {
            textoClasificacion = "Bajo peso";
            clase = "bajo-peso";
        } else if (imc < 25) {
            textoClasificacion = "Normal";
            clase = "normal";
        } else if (imc < 30) {
            textoClasificacion = "Sobrepeso";
            clase = "sobrepeso";
        } else {
            textoClasificacion = "Obesidad";
            clase = "obesidad";
        }

        clasificacion.textContent = `Clasificación: ${textoClasificacion}`;
        clasificacion.className = clase;
    });
});
