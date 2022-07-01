import React, { useEffect, useRef } from "react";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import * as echarts from "echarts";
import china from "../geo/china.json";

export const Chart7 = () => {
  const divRef = useRef(null);
  const colors = { 黑龙江省: "#6B31F7", 贵州省: "#15B8FD", 辽宁省: "#06E1EE" };
  useEffect(() => {
    var myChart = echarts.init(divRef.current);
    // @ts-ignore
    echarts.registerMap("CN", china);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        series: [
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "黑龙江省", value: 1 }],
            label: { show: false, color: "white" },
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["黑龙江省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "贵州省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["贵州省"],
              borderColor: "yellow",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
          {
            type: "map",
            mapType: "CN", // 自定义扩展图表类型
            data: [{ name: "辽宁省", value: 100 }],
            itemStyle: {
              areaColor: "#010D3D",
              color: colors["辽宁省"],
              borderColor: "#01A7F7",
              emphasis: {
                label: { color: "white" },
                areaColor: "#5470C6",
              },
            },
          },
        ],
      })
    );
  }, []);

  return (
    <div className="bordered 数据来源">
      <h2>本项目主要数据来源</h2>
      <div className="wrapper">
        <div ref={divRef} className="chart" />
        <div className="legend bordered">
          <span className="icon" style={{ background: colors["黑龙江省"] }} />
          黑龙江
          <span className="icon" style={{ background: colors["贵州省"] }} />
          贵州
          <span className="icon" style={{ background: colors["辽宁省"] }} />
          辽宁
        </div>
        <div className="notes">此地图仅显示了中国的部分区域</div>
      </div>
    </div>
  );
};
