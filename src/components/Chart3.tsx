import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";

export const Chart3 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        legend: {
          bottom: px(10),
          textStyle: { color: "white" },
          itemWidth: px(30),
          itemHeight: px(16),
        },
        grid: {
          x: px(20),
          x2: px(20),
          y: px(20),
          y2: px(70),
          containLabel: true,
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
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
            name: "养老保险",
            type: "line",
            data: [
              0.01, 0.02, 0.03, 0.04, 0.05, 0.06, 0.07, 0.08, 0.09,
            ].reverse(),
          },
          {
            name: "医疗保险",
            type: "line",
            data: [
              0.05, 0.03, 0.04, 0.09, 0.01, 0.07, 0.02, 0.09, 0.1,
            ].reverse(),
          },
          {
            name: "工伤保险",
            type: "line",
            data: [
              0.02, 0.04, 0.01, 0.09, 0.02, 0.03, 0.04, 0.1, 0.12,
            ].reverse(),
          },
          {
            name: "生育保险",
            type: "line",
            data: [
              0.01, 0.05, 0.06, 0.03, 0.08, 0.02, 0.1, 0.13, 0.07,
            ].reverse(),
          },
          {
            name: "失业保险",
            type: "line",
            data: [
              0.03, 0.06, 0.02, 0.09, 0.09, 0.03, 0.1, 0.1, 0.03,
            ].reverse(),
          },
          {
            name: "失业保险",
            type: "line",
            data: [
              0.02, 0.05, 0.01, 0.09, 0.02, 0.13, 0.1, 0.03, 0.14,
            ].reverse(),
          },
        ].map((obj) => ({
          ...obj,
          symbol: "circle",
          symbolSize: px(12),
          lineStyle: { width: px(2) },
        })),
      })
    );
  }, []);
    return (
      <div className="bordered 关键节点数占比">
        <h2>关键节点数占比</h2>
        <div ref={divRef} className="chart" />
      </div>
    );
};
