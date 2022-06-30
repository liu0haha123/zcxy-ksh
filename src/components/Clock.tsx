import React, { useEffect } from "react";
import { dayMap, monthMap, dateMap, timeMapper } from "../shared/timeMap";
const Clock = () => {
  useEffect(() => {
    // TODO 优化点 这里有一个第一秒刷不出来的bug
    // 获取元素
    const clock = document.querySelector(".clock");
    const timeMaker = document.createElement("div");
    const dateMaker = document.createElement("div");
    clock.appendChild(timeMaker);
    clock.appendChild(dateMaker);
    // 迭代式设置定时器
    const step = () => {
      setTimeout(() => {
        const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
        const second = time.getSeconds();
        const year = time.getFullYear();
        const month = time.getMonth() + 1;
        const date = time.getDate();
        const day = time.getDay();
        dateMaker.innerHTML =
          year +
          "年 " +
          monthMap[month] +
          " " +
          dateMap[date] +
          "日 " +
          dayMap[day];
        timeMaker.innerHTML = timeMapper(hour, minute, second);
        step();
      }, 1000);
    };
    step();
  }, []);

  return <div className="clock"></div>;
};

export default Clock;
