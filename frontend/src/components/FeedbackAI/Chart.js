import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

const labels = ['[-1.0, -0.8)', '[-0.8, -0.6)', '[-0.6, -0.4)', '[-0.4, -0.2)', '[-0.2, 0.0)', '[0.0, 0.2)', '[0.2, 0.4)', '[0.4, 0.6)', '[0.6, 0.8)', '[0.8, 1.0]'];

function SentimentChart() {
    return ( <
        div >
        <
        Bar data = {
            {
                labels,
                datasets: [{
                        label: 'Raw Sentiment Scores',
                        data: [10, 7, 4, 2, 2, 2, 4, 5, 4, 0],
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    },
                    {
                        label: 'Adjusted Sentiment Scores',
                        data: [9, 8, 4, 4, 0, 2, 6, 5, 2, 2],
                        backgroundColor: 'rgba(53, 162, 235, 0.5)',
                    },
                ],
            }
        }
        /> <
        /div>
    );
}

export default SentimentChart;