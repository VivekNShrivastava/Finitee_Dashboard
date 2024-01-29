import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  function Linechart(){
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Bar Chart',
          },
        },
      };
      const labels = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July','Aug', 'Sep'];
      const data = {
        labels,
        datasets: [
          {
            label: 'Finitee',
            data: labels.map(() => Math.random()*1000),
            backgroundColor: "#4F45B6",
            barThickness: 20, 
          
          },
        //   {
        //     label: 'Dataset 2',
        //     data: labels.map(() => Math.random()*1000),
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        //   },
        ],
      };
    return <>
    <Bar options={options} data={data} />
    </>
}
  

  export default Linechart;