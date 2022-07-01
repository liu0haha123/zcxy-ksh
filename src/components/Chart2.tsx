import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { px } from "../shared/px";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { baseEchartOptions } from "../shared/base-echart-options";

export const Chart2 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01],
          splitLine: { show: false },
          axisLabel: { show: false },
        },
        yAxis: {
          axisTick: { show: false },
          type: "category",
          data: ["哈尔滨", "牡丹江", "七台河", "佳木斯", "双鸭山", "大庆"],
        },
        series: [
          {
            name: "脆性点数量",
            type: "bar",
            data: [13, 59, 34, 10, 14, 30],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#2034f9",
                  },
                  {
                    offset: 1,
                    color: "#04a1ff",
                  },
                ]),
              },
            },
          },
          {
            name: "政策数量",
            type: "bar",
            data: [125, 138, 100, 94, 141, 87],
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
                  {
                    offset: 0,
                    color: "#b92ae8",
                  },
                  {
                    offset: 1,
                    color: "#6773e7",
                  },
                ]),
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 脆性点">
      <h2>脆性点数量统计</h2>

      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <span className="first" />
        脆性点数量
        <span className="second" />
        政策数量
      </div>
    </div>
  );
};
