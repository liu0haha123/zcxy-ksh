import React from "react";

export const Chart6 = () => {
  return (
    <div className="政策森林">
      <h2>近年政策森林数对比</h2>
      <table>
        <thead>
          <tr>
            <th>年份</th>
            <th>医疗保险</th>
            <th>养老保险</th>
            <th>工伤保险</th>
            <th>失业保险</th>
            <th>生育保险</th>
            <th>住房公积金</th>
            <th>总计</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2018</td>
            <td>21</td>
            <td>32</td>
            <td>4</td>
            <td>15</td>
            <td>6</td>
            <td>7</td>
            <td>86</td>
          </tr>
          <tr>
            <td>2019</td>
            <td>21</td>
            <td>4</td>
            <td>9</td>
            <td>1</td>
            <td>3</td>
            <td>7</td>
            <td>45</td>
          </tr>
          <tr>
            <td>2020</td>
            <td>3</td>
            <td>4</td>
            <td>1</td>
            <td>12</td>
            <td>7</td>
            <td>9</td>
            <td>36</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
