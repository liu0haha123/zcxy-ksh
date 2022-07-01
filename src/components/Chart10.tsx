import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import { baseEchartOptions } from "../shared/base-echart-options";

export const Chart10 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        textStyle: {
          fontSize: px(16),
          color: "#f1c35b",
        },
        polar: [
          {
            indicator: [
              { text: "医疗保险", max: 6000 },
              { text: "养老保险", max: 16000 },
              { text: "失业保险", max: 30000 },
              { text: "生育保险", max: 38000 },
              { text: "住房公积金", max: 52000 },
              { text: "工伤保险", max: 25000 },
            ],
            splitArea: {
              show: true,
              areaStyle: {
                color: ["#d72941", "#f1c35b", "#99c736", "#75813b", "#4e3829"],
                // 图表背景网格的颜色
              },
            },
            splitLine: {
              show: true,
              lineStyle: {
                width: 1,
                color: ["#7954a1", "#ef91ab"],
                // 图表背景网格线的颜色
              },
            },
          },
        ],
        calculable: true,
        series: [
          {
            type: "radar",
            top: px(20),
            data: [
              {
                value: [4300, 10000, 28000, 31000, 50000, 19000],
                name: "政策基因数量",
                itemStyle: {
                  color: "#57aaed",
                },
              },
              {
                value: [5000, 14000, 28000, 35000, 52000, 21000],
                name: "总政策数量",
                itemStyle: {
                  color: "#b92ae8",
                },
              },
            ],
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 雷达图">
      <h2>政策基因占比展示</h2>
      <div ref={divRef} className="chart"></div>
      <div className="legend">
        <span className="first" />
        政策基因数
        <span className="second" />
        总政策数
      </div>
    </div>
  );
};
