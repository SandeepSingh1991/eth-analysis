// Fetch data from data.json
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#data-table tbody');
        const dateFilter = document.getElementById('date-filter');

        // Populate table
        function renderTable(filteredData) {
            tableBody.innerHTML = '';
            filteredData.forEach(row => {
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${new Date(row.date).toLocaleString()}</td>
                    <td>${row.open.toFixed(2)}</td>
                    <td>${new Date(row.date).toLocaleString()}</td>
                    <td>${row.close.toFixed(2)}</td>
                    <td>${row.max_up.toFixed(2)}</td>
                    <td>${row.max_down.toFixed(2)}</td>
                    <td>${row.concat_date}</td>
                `;
                tableBody.appendChild(tr);
            });
            renderCharts(filteredData);
        }

        // Filter data
        dateFilter.addEventListener('input', () => {
            const searchTerm = dateFilter.value.toLowerCase();
            const filteredData = data.filter(row => 
                row.concat_date.toLowerCase().includes(searchTerm)
            );
            renderTable(filteredData);
        });

        // Render charts
        function renderCharts(filteredData) {
            const labels = filteredData.map(row => row.concat_date);
            const maxUpData = filteredData.map(row => row.max_up);
            const maxDownData = filteredData.map(row => row.max_down);

            new Chart(document.getElementById('max-up-chart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Max Up',
                        data: maxUpData,
                        borderColor: '#2ecc71',
                        fill: false
                    }]
                }
            });

            new Chart(document.getElementById('max-down-chart'), {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Max Down',
                        data: maxDownData,
                        borderColor: '#e74c3c',
                        fill: false
                    }]
                }
            });
        }

        // Initial render
        renderTable(data);
    });