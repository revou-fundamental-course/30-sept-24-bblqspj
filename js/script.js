function convertToFahrenheit() {
    const celsius = document.getElementById('input-suhu').value;
    if (celsius === '') {
        document.getElementById('how-to-suhu').value = 'Harap masukkan suhu dalam Celcius.';
        return;
    }
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('hasil-suhu').value = fahrenheit.toFixed(2);
    document.getElementById('how-to-suhu').value = `${celsius}°C × (9/5) + 32 = ${fahrenheit.toFixed(2)}°F`;
}

function resetForm() {
    document.getElementById('input-suhu').value = '';
    document.getElementById('hasil-suhu').value = '';
    document.getElementById('how-to-suhu').value = '';
}

function reverseConversion() {
    const fahrenheit = document.getElementById('hasil-suhu').value;
    if (fahrenheit === '') {
        document.getElementById('how-to-suhu').value = 'Harap masukkan suhu dalam Fahrenheit.';
        return;
    }
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('input-suhu').value = celsius.toFixed(2);
    document.getElementById('how-to-suhu').value = `${fahrenheit}°F − 32 × 5/9 = ${celsius.toFixed(2)}°C`;
}