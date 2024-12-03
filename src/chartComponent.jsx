import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const ChartComponent = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  useEffect(() => {
    // Retrieve and parse the data from localStorage
    // get totalTimes from localstorage
    let totalTimes = JSON.parse(localStorage.getItem('totalTimes'));
    // go through totalTimes and convert it to an array of dicts
    let storedData = Object.entries(totalTimes).map(([language, time]) => ({
        language,
        time,
    }));

    const data = storedData;

    const ctx = chartRef.current.getContext('2d');

    // Destroy the previous chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    // Create a new chart instance
    chartInstanceRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.map(row => row.language),
        datasets: [
          {
            label: 'Time spent on languages (seconds)',
            data: data.map(row => row.time),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(199, 199, 199, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(199, 199, 199, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              display: false,
            },
            ticks: {
              display: true,
            },
          },
          x: {
            grid: {
              display: false,
            },
            ticks: {
              display: true,
            },
          },
        },
      },
    });

    // Cleanup function to destroy the chart instance when the component unmounts
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []);

  return <canvas id="acquisitions" ref={chartRef}></canvas>;
};

export default ChartComponent;