import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { baseEchartOptions } from "../shared/base-echart-options";

export const Chart1 = () => {
  const divRef = useRef(null);
  const myChart = useRef(null);
  const myData = [14, 40, 36, 41, 15, 36]
  const fetchData = (data) => {
    myChart.current.setOption(
      createEchartsOptions({
        ...baseEchartOptions,
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
            data: data,
          },
        ],
      })
    );
  };
  useEffect(() => {
    setInterval(() => {
      const newData = myData.map(item=>item+Math.random()*10)
      fetchData(newData);
    }, 1000);
  }, []);

    useEffect(() => {
      myChart.current = echarts.init(divRef.current);
      fetchData(myData);
    }, []);

  return (
    <div className="bordered 政策数量">
      <h2>政策条目数</h2>
      <div ref={divRef} className="chart"></div>
    </div>
  );
};
