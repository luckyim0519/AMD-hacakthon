// your-script.js

// Function to update the graph
function updateGraph() {
    // Get user input from the text field
    const inputData = document.getElementById('dataInput').value;

    // Parse the input data (assuming comma-separated values)
    const data = inputData.split(',').map(Number);

    // Get the canvas element
    const ctx = document.getElementById('myChart').getContext('2d');

    // Update or create the chart
    if (window.myChart) {
        // If the chart already exists, update its data
        window.myChart.data.datasets[0].data = data;
        window.myChart.update();
    } else {
        // If the chart doesn't exist, create a new one
        window.myChart = new Chart(ctx, {
            type: 'bar', // Change the chart type as needed
            data: {
                labels: data.map((_, index) => `Label ${index + 1}`),
                datasets: [{
                    label: 'Data',
                    data: data,
                    backgroundColor: 'rgba(75, 192, 192, 0.2)', // Adjust as needed
                    borderColor: 'rgba(75, 192, 192, 1)', // Adjust as needed
                    borderWidth: 1
                }]
            },
            options: {
                // Customize chart options as needed
            }
        });
    }
}
