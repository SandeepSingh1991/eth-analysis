// Fetch and display data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById('max-up').textContent = data.max_up.toFixed(2);
        document.getElementById('max-down').textContent = data.max_down.toFixed(2);
        document.getElementById('last-updated').textContent = data.last_updated;
    });