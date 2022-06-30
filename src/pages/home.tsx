import React, { useEffect, useRef } from "react";
import Clock from "../components/Clock";
import "./home.scss";
import "@icon-park/react/styles/index.css";
import { Bill } from "@icon-park/react";
import * as echarts from "echarts";
import { Chart1 } from "../components/Chart1";

export const Home = () => {
  return (
    <div className="home">
      <header>
        <Clock />
        <span className="title">政策血缘数据可视化展示</span>

        <Bill theme="outline" size="24" fill="#6d929d" strokeLinejoin="bevel" />
      </header>
      <main>
        <section className="section1">
          <Chart1 />
        </section>
        <section className="bordered section2"></section>
        <section className="bordered section3"></section>
        <section className="bordered section4"></section>
        <section className="bordered section5"></section>
      </main>
    </div>
  );
};
