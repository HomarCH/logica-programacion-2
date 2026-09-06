function convertTemp(scale) {
    const celsiusField = document.getElementById("celsius");
    const fahrenheitField = document.getElementById("fahrenheit");
    const kelvinField = document.getElementById("kelvin");

    let celsius, fahrenheit, kelvin;

    if (scale === "celsius") {
        if (celsiusField.value === "") {
            fahrenheitField.value = "";
            kelvinField.value = "";
            return;
        }

        celsius = parseFloat(celsiusField.value);
        fahrenheit = (celsius * 9 / 5) + 32;
        kelvin = celsius + 273.15;

        fahrenheitField.value = fahrenheit.toFixed(2);
        kelvinField.value = kelvin.toFixed(2);
    }

    else if (scale === "fahrenheit") {
        if (fahrenheitField.value === "") {
            celsiusField.value = "";
            kelvinField.value = "";
            return;
        }

        fahrenheit = parseFloat(fahrenheitField.value);
        celsius = (fahrenheit - 32) * 5 / 9;
        kelvin = celsius + 273.15;

        celsiusField.value = celsius.toFixed(2);
        kelvinField.value = kelvin.toFixed(2);
    }

    else if (scale === "kelvin") {
        if (kelvinField.value === "") {
            celsiusField.value = "";
            fahrenheitField.value = "";
            return;
        }

        kelvin = parseFloat(kelvinField.value);
        celsius = kelvin - 273.15;
        fahrenheit = (celsius * 9 / 5) + 32;

        celsiusField.value = celsius.toFixed(2);
        fahrenheitField.value = fahrenheit.toFixed(2);
    }
}