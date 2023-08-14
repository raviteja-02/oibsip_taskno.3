function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result = document.getElementById('result');

    if (unit === 'celsius') {
        var fahrenheit = temperature * 9 / 5 + 32;
        var kelvin = temperature + 273.15;
        result.innerHTML = temperature + " Celsius = " + fahrenheit + " Fahrenheit<br>" +
            temperature + " Celsius = " + kelvin + " Kelvin";
    } else if (unit === 'fahrenheit') {
        var celsius = (temperature - 32) * 5 / 9;
        var kelvin = (temperature - 32) * 5 / 9 + 273.15;
        result.innerHTML = temperature + " Fahrenheit = " + celsius + " Celsius<br>" +
            temperature + " Fahrenheit = " + kelvin + " Kelvin";
    } else if (unit === 'kelvin') {
        var celsius = temperature - 273.15;
        var fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
        result.innerHTML = temperature + " Kelvin = " + celsius + " Celsius<br>" +
            temperature + " Kelvin = " + fahrenheit + " Fahrenheit";
    }
}
