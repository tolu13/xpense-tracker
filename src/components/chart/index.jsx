
import Chart from "react-apexcharts";



const options = {
    labels: ["Expense", "Income"],
    colors: ["#FD5E53", "#213ebf"],
    chart: {
      width: "50px",
    },
    states: {
      hover: {
        filter: {
          type: "none",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    hover: { mode: null },
    plotOptions: {
      donut: {
        expandOnClick: false,
        donut: {
          labels: {
            show: false,
          },
        },
      },
    },
    fill: {
      colors: ["#FD5E53", "#213ebf"],
    },
    tooltip: {
      enabled: true,
      theme: "dark",
      style: {
        fontSize: "12px",
        fontFamily: undefined,
        backgroundColor: "#000000",
      },
    },
  };
  
export default function TransactionSummaryCharts({income, expense}){
  console.log("Income:", income, "Expense:", expense);
  return   <Chart 
    options={options}
    series={[expense, income]}
    type="pie"
    width={'100%'}
    height={'100%'}
    />
}