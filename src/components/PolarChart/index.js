import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const PolarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
            type: 'polarArea',
            data: {
                labels: [
                    'Black Canadians',
                    'Filipino-Canadians',
                    'South-East Asian',
                    'Arab',
                    'South Asian Canadians'
                ],
                datasets: [{
                    label: 'My First Dataset',
                    data: [38, 28, 23, 22, 19],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(75, 192, 192)',
                        'rgb(255, 205, 86)',
                        'rgb(201, 203, 207)',
                        'rgb(54, 162, 235)'
                    ]
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false, // Set to false for fully responsive behavior
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div style={{ width: "100%", height: "100%" }}>
            <canvas id="chartCanvas" ref={chartRef} />
        </div>
    );
};

export default PolarChart;
