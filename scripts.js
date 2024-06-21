document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display usage data when the usage page loads
    if (window.location.pathname.endsWith('usage.html')) {
        fetchUsageData();
    }

    // Handle report generation form submission
    const reportForm = document.querySelector('form');
    if (reportForm) {
        reportForm.addEventListener('submit', (event) => {
            event.preventDefault();
            generateReport();
        });
    }

    // Fetch usage data from the server
    async function fetchUsageData() {
        try {
            const response = await fetch('/api/usage');
            const data = await response.json();
            displayUsageData(data);
        } catch (error) {
            console.error('Error fetching usage data:', error);
        }
    }

    // Display usage data in the table
    function displayUsageData(data) {
        const table = document.querySelector('table');
        data.forEach(entry => {
            const row = document.createElement('tr');
            const dateCell = document.createElement('td');
            const usageCell = document.createElement('td');
            dateCell.textContent = entry.date;
            usageCell.textContent = entry.usage;
            row.appendChild(dateCell);
            row.appendChild(usageCell);
            table.appendChild(row);
        });
    }

    // Generate report based on form inputs
    function generateReport() {
        const startDate = document.getElementById('start-date').value;
        const endDate = document.getElementById('end-date').value;
        
        if (!startDate || !endDate) {
            alert('Please select both start and end dates.');
            return;
        }

        // Dummy report generation logic - in real scenario, fetch report from server
        alert(`Generating report from ${startDate} to ${endDate}`);
        // Here you can add logic to fetch and display the report data
    }
});
