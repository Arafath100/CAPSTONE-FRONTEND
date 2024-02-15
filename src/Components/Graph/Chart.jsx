import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";
import Context from "../../Context/Context";
import { graphDataAxios } from "../../Services/axios";

function ChartComp(props) {
  const contextData = useContext(Context);
  const selectedDate = contextData.timeStamp[0];

  // Calculate endDate
  const endDate = new Date(selectedDate.endDate);
  const adjustedEndDate = new Date(endDate.setDate(endDate.getDate() + 1));

  const [plotData, setPlotData] = useState({
    date: [],
    count: [],
  });

  useEffect(() => {
    graphDataAxios({ ...selectedDate, endDate: adjustedEndDate })
      .then((res) => {
        const dataArr = res.data.data;
        const date = [];
        const count = [];
        dataArr.forEach((obj) => {
          const stamp = new Date(obj.time);
          date.push(
            `${stamp.getDate()} ${stamp.toLocaleString("en-US", {
              month: "short",
            })}  ${stamp.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}`
          );
          count.push(obj.mailCount);
        });
        setPlotData({ date: date, count: count });
      })
      .catch((err) => console.log(err));
  }, [selectedDate]);

  const options = {
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: plotData.date,
    },
  };

  const series = [
    {
      name: "Email Sent",
      data: plotData.count,
    },
  ];

  const donutOptions = {
    chart: {
      type: "donut",
    },
    labels: plotData.date,
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const donutData = {
    series: plotData.count,
    options: donutOptions,
  };

  return (
    <>
      {props.graphType !== "donut" ? (
        <div className="app w-100">
          <div className="row">
            <div className="mixed-chart">
              <Chart
                options={options}
                series={series}
                type={props.graphType !== "donut" ? props.graphType : "line"}
                width="100%"
                height={window.innerHeight <= 900 ? "500" : ""}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="donut m-5 w-100">
          <Chart
            options={donutOptions}
            series={donutData.series}
            type="donut"
            width="100%"
            height="500"
          />
        </div>
      )}
    </>
  );
}

export default ChartComp;
