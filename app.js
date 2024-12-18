document.getElementById('submitBtn').addEventListener('click', function() {
    const carType = document.getElementById('carType').value.toLowerCase();
    const carDetails = document.getElementById('carDetails');

    let details = '';

    switch (carType) {
        case 'toyota':
            details = '- Model: Toyota Camry <br>- Color: Blue <br>- Engine: 2.5L I4<br>- Price: Approximately $25,000';
            break;
        case 'ford':
            details = '- Model: Ford Mustang <br> - Color: Red <br> - Engine: 5.0L V8 <br> - Price: Approximately $43,000';
            break;
        case 'nissan':
            details = '- Model: Nissan Altima<br>- Color: Silver<br>- Engine: 2.5L I4<br>- Price: Approximately $24,000';
            break;
        case 'jeep':
            details = '- Model: Jeep Wrangler<br>- Color: Green<br>- Engine: 3.6L V6<br>- Price: Approximately $30,000';
            break;
        case 'bmw':
            details = '- Model: BMW 3 Series<br>- Color: Black<br>- Engine: 2.0L I4 Turbo<br>- Price: Approximately $41,000';
            break;
        default:
            details = 'Sorry, no information available for this car type.';
            break;
    }

    carDetails.innerHTML = details;
    carDetails.classList.remove('hidden');
});
