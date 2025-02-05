// Fetch data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('table-body');

        // Populate table
        data.forEach(row => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${row.date_range}</td>
                <td>${row.open.toFixed(2)}</td>
                <td>${row.high.toFixed(2)}</td>
                <td>${row.low.toFixed(2)}</td>
                <td>${row.close.toFixed(2)}</td>
            `;
            tableBody.appendChild(tr);
        });
    });