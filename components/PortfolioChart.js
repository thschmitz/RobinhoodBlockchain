import React from 'react';
import {Line} from "react-chartjs-2";
import Chart from "chart.js/auto";


const data = {
    labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ],


    datasets: [
        {
            fill: false,
            lineTension: 0.01,
            backgroundColor: "#00ff1a",
            borderCapStyles: "butt",
            borderColor: "#00ff1a",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#00ff1a",
            pointHoverBorderColor: "#00ff1a",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [40, 45, 70, 55, 60, 35, 50, 75, 70, 84, 91, 100],

        }
    ]
}


const options = {
    plugins:{
        legend:{
            display:false,
        }
    }
}


const PortfolioChart = () => {
    return <Line data={data} options={options} width={400} height={200}/>
}

export default PortfolioChart