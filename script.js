function convertTemperature() {
    // obtener el valor de entrada y convertirlo a un número de floating-point
    const celsiusInput = document.getElementById('celsius').value;
    const fahrenheitField = document.getElementById('fahrenheit');
    const kelvinField = document.getElementById('kelvin');

    // Si el input está vacío, limpiar los campos de salida y salir de la función
    if (celsiusInput === "") {
        fahrenheitField.value = "";
        kelvinField.value = "";
        return;
    }

    const celsius = parseFloat(celsiusInput);

    //Aplicación de las fórmulas de conversión
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    //mostrar los resultados
    fahrenheitField.value = fahrenheit.toFixed(2) + " °F";
    kelvinField.value = kelvin.toFixed(2) + " K";
}