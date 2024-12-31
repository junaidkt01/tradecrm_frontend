import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
    const data = {
        labels: ['28-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan'],
        datasets: [
            {
                label: '2021',
                data: [60, 40, 50, 20, 70, 60, 50],
                // backgroundColor: 'rgba(75, 192, 192, 0.5)',
                backgroundColor: '#60dd60d3',
            },
            {
                label: '2022',
                data: [50, 30, 80, 10, 90, 85, 40],
                // backgroundColor: 'rgba(255, 99, 132, 0.5)',
                backgroundColor: '#ff6666c4',
            },
        ],
    };

    const options: any = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: false,
                text: 'Sales Comparison (2021 vs 2022)',
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
            },
        },
    };

    return (
        // <div style={{ width: '800px', margin: '0 auto' }}>
        <div style={{ width: '100%', margin: '0 auto' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default BarChart;


// import { Bar } from "react-chartjs-2";
// import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// const BarChart = () => {
//     const data = {
//         labels: ['28-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan', '31-Jan'], // Your x-axis labels
//         datasets: [
//             {
//                 label: '2021',
//                 data: [60, 40, 50, 20, 70, 60, 50],
//                 backgroundColor: 'rgba(75, 192, 192, 0.5)',
//             },
//             {
//                 label: '2022',
//                 data: [50, 30, 80, 10, 90, 85, 40],
//                 backgroundColor: 'rgba(255, 99, 132, 0.5)',
//             },
//         ],
//     };

//     const options: any = {
//         responsive: true,
//         plugins: {
//             legend: {
//                 position: 'bottom',
//             },
//             title: {
//                 display: true,
//                 text: 'Sales Comparison (2021 vs 2022)',
//             },
//         },
//         scales: {
//             y: {
//                 beginAtZero: true,
//                 max: 100,
//             },
//         },
//     };

//     return (
//         <div className="bar-chart-page" >
//             <h2>Bar Chart Example</h2>
//             <Bar data={data} options={options} />
//         </div>
//     );
// };

// export default BarChart;
