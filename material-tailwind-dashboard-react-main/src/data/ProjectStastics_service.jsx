import React, { useRef, useEffect } from 'react';
import ApexCharts from 'apexcharts'; // Ensure you import ApexCharts if it's not globally available

function ProjectStastics_service() {
  
  const options = {
    // set the labels option to true to show the labels on the X and Y axis
    xaxis: {
      show: true,
      categories: ['01 Feb', '02 Feb', '03 Feb', '04 Feb', '05 Feb', '06 Feb', '07 Feb'],
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: true,
      },
    },
    yaxis: {
      show: true,
      labels: {
        show: true,
        style: {
          fontFamily: "Inter, sans-serif",
          cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
        },
        formatter: function (value) {
          return '' + value;
        }
      }
    },
    series: [
      {
        name: "Speculative Values",
        data: [150, 141, 145, 152, 135, 125],
        color: "#1A56DB",
      },
      {
        name: "Actual Values",
        data: [43, 13, 65, 12, 42, 73],
        color: "#7E3BF2",
      },
    ],
    chart: {
      sparkline: {
        enabled: false
      },
      height: "100%",
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#1C64F2",
        gradientToColors: ["#1C64F2"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    legend: {
      show: true
    },
    grid: {
      show: true,
    },
  }

  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && typeof ApexCharts !== "undefined") {
      const chart = new ApexCharts(chartRef.current, options);
      chart.render();
      return () => {
        chart.destroy(); // Fixed the typo here
      };
    }
  }, [options]);

  return (
    <div>
      <div className="w-full bg-white rounded-xl p-4 shadow dark:bg-gray-800">
        <div className="flex justify-between p-4 md:p-6 pb-0 md:pb-0">
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-2">Service Cost</h5>
          </div>
        </div>
        <div ref={chartRef} id="labels-chart" className="px-2.5"></div>
        {/* <div className='text-sm ms-3 flex mt-3 text-gray-700'>
          <h1 className='font-semibold'>Total Service Cost :</h1>
          <p>10982</p>
        </div> */}
      </div>
    </div>
  );
}

export default ProjectStastics_service;