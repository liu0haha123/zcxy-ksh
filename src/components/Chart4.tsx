import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart4 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const myData = [
    0.95, 0.93, 0.91, 0.93, 0.94, 0.95, 0.96, 0.91, 0.89, 0.87, 0.96, 0.95,
  ];
  const fetchData = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          splitLine: { show: true, lineStyle: { color: "#073E78" } },
          axisTick: { show: false },
          axisLine: { show: false },
        },
        yAxis: {
          type: "value",
          splitLine: { lineStyle: { color: "#073E78" } },
          axisLabel: {
            formatter(val) {
              return val * 100 + "%";
            },
          },
        },
        series: [
          {
            name: "无冲突数量",
            type: "line",
            data: data,
            symbol: "circle",
            symbolSize: px(12),
            lineStyle: { width: px(2) },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#414a9f",
                },
                {
                  offset: 1,
                  color: "#1b1d52",
                },
              ]),
            },
          },
        ],
      })
    );
  };
    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      fetchData(myData);
    }, []);
  useEffect(() => {
    setInterval(() => {
      const newData = [
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
        0.7 + Math.random() * 0.3,
      ];
      fetchData(newData);
    }, 1000);
  }, []);



  return (
    <div className="bordered 有效发布">
      <h2>无冲突政策占比</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
