document.addEventListener("DOMContentLoaded", async function () {
    const coin = "ETH/USDT"; // Default selection
    fetchData(coin);
    
    document.getElementById("coinSelector").addEventListener("change", function () {
        fetchData(this.value);
    });
});

async function fetchData(coin) {
 const url = `https://crypto-app.onrender.com/ohlcv?coin=${coin}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        updateTable(data);
        updateChart(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}

function updateTable(data) {
    const tableBody = document.getElementById("cryptoTable");
    tableBody.innerHTML = "";

    data.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `<td>${row.Date}</td>
                        <td>${row.Opening}</td>
                        <td>${row.High_Value}</td>
                        <td>${row.Low_Value}</td>`;
        tableBody.appendChild(tr);
    });
}

function updateChart(data) {
    const ctx = document.getElementById("priceChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: data.map(d => d.Date),
            datasets: [
                { label: "Opening", data: data.map(d => d.Opening), borderColor: "blue", fill: false },
                { label: "High", data: data.map(d => d.High_Value), borderColor: "red", fill: false },
                { label: "Low", data: data.map(d => d.Low_Value), borderColor: "green", fill: false }
            ]
        },
        options: { responsive: true }
    });
}
