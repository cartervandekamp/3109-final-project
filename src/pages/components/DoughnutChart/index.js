import React, { useEffect, useRef } from "react";
import Chart from 'chart.js/auto';

const DoughnutChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['65 years or older', '55 - 64 years', '35 - 44 years', 'other age groups'],
                datasets: [{
                    label: 'Senior - led households have lower rates of food insecurity',
                    data: [10, 17, 23, 50],
                    backgroundColor: [
                        '#39542F',
                        '#FFEDA6',
                        '#1A1A1A',
                        '#525252',
                    ],
                    hoverOffset: 8
                }]
            }
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return <canvas ref={chartRef} />;
};

export default DoughnutChart;
