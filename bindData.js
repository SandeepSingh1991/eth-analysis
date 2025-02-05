// src/bindData.js or public/js/bindData.js
async function fetchCryptoData() {
    const response = await fetch('/.netlify/functions/fetchData');
    const data = await response.json();

    if (data && Array.isArray(data)) {
        // Example: Bind data to a chart or table
        const chartData = data.map(item => ({
            timestamp: item[0], // timestamp
            open: item[1], // opening price
            high: item[2], // high price
            low: item[3], // low price
            close: item[4], // close price
        }));

        updateChart(chartData);
    }
}

// This function updates a chart with the fetched data (you can use a library like Chart.js)
function updateChart(data) {
    // Logic to update the chart with data
    console.log(data);
}

fetchCryptoData();
