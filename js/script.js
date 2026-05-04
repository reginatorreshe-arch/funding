const ctx = document.getElementById('graficaDonaciones');
new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Útiles', 'Becas', 'Tecnología'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#2E86C1', '#28B463', '#F4D03F']
        }]
    }
});
