import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import { createEchartsOptions } from "../shared/create-echarts-options";
import { px } from "../shared/px";
import { linkData, nodesData } from "../shared/generateData";

export const Chart5 = () => {
  const divRef = useRef(null);
  useEffect(() => {
    const links = linkData;
    const nodes = nodesData;
    console.log(nodes);
    var myChart = echarts.init(divRef.current);
    myChart.setOption(
      createEchartsOptions({
        xAxis: { show: false },
        yAxis: { show: false },
        // 提示框的配置
        tooltip: {
          formatter: (x) => {
            return [x.name]; //设置提示框的内容和格式 节点和边都显示name属性
          },
        },
        animationDurationUpdate: 5000,
        animationEasingUpdate: "quarticlnOut", // quarticlnOut quinticInOut

        legend: {
          x: "center",
          show: true,
          textStyle: {
            color: "yellow",
            fontSize: px(22),
          },
        },
        series: [
          {
            type: "graph", // 类型:关系图
            layout: "force", //图的布局，类型为力导图
            symbolSize: px(75), //节点大小
            focusNodeAdjacency: true, //当鼠标移动到节点上，突出显示节点以及节点的边和邻接节点
            draggable: true, //指示节点是否可以拖动
            roam: true,
            edgeSymbol: ["none", "arrow"],
            categories: [
              {
                name: "实体",
                itemStyle: {
                  color: "lightgreen",
                },
              },
              {
                name: "行为",
                itemStyle: {
                  color: "pink",
                },
              },
              {
                name: "实施者",
                itemStyle: {
                  color: "orange",
                },
              },
            ],
            label: {
              show: true,
              textStyle: {
                fontSize: px(18),
                color: "black",
              },
            },
            force: {
              repulsion: 800, //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
              edgeLength: px(6), //边的两个节点之间的距离
              gravity: 0.1, //节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
            },
            edgeSymbolSize: [4, 20], // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            edgeLabel: {
              show: true,
              textStyle: {
                fontSize: px(15),
              },
              formatter: "{c}",
            },
            data: nodes,
            links: links,
            lineStyle: {
              opacity: 0.9,
              width: 1.1,
              curveness: 0,
              color: "#66ccff",
            },
          },
        ],
      })
    );
  }, []);
  return (
    <div className="bordered 知识图谱">
      <h2>部分图谱展示</h2>
      <div ref={divRef} className="chart" />
    </div>
  );
};
