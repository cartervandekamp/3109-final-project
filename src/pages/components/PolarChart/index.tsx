import React, { useEffect, useRef, useState } from "react";
import Chart from 'chart.js/auto';

const PolarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);
    const [canvasDimensions, setCanvasDimensions] = useState({ width: 200, height: 200 });

    useEffect(() => {
        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
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
                maintainAspectRatio: true,
                aspectRatio: 1.5, 
            }
        });

        const handleResize = () => {
            const { width, height } = chartRef.current.parentElement.getBoundingClientRect();
            setCanvasDimensions({ width, height });
        };

        handleResize(); 

        window.addEventListener('resize', handleResize);

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <div style={{ width: "80%", height: "80%" }}><canvas ref={chartRef} width={canvasDimensions.width} height={canvasDimensions.height} /></div>;
};

export default PolarChart;
