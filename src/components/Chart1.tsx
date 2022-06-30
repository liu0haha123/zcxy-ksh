import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const px = (n) => (n / 2420) * (window as any).pageWidth;

export const Chart1 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption({
      textStyle: {
        fontSize: px(12),
        color: "#79839E",
      },
      title: { show: false },
      legend: { show: false },
      xAxis: {
        data: [
          "医疗保险",
          "工伤保险",
          "养老保险",
          "失业保险",
          "生育保险",
          "住房公积金",
        ],
        axisTick: { show: false },
        axisLine: {
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
          formatter(val) {
            if (val.length > 2) {
              const array = val.split("");
              array.splice(2, 0, "\n");
              return array.join("");
            } else {
              return val;
            }
          },
        },
      },
      grid: {
        x: px(40),
        y: px(40),
        x2: px(40),
        y2: px(40),
      },
      yAxis: {
        splitLine: { show: false },
        axisLine: {
          show: true,
          lineStyle: { color: "#083B70" },
        },
        axisLabel: {
          fontSize: px(12),
        },
      },
      series: [
        {
          type: "bar",
          data: [10, 20, 36, 41, 15, 26],
        },
      ],
    });
  }, []);

  return (
    <div className="bordered 管辖统计">
      <h2>近日发布政策条目数</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
