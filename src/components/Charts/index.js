import { Line, Pie } from "@ant-design/charts";
import React from "react";

function ChartComponent({ sortedTransactions }) {
  const data = sortedTransactions.map((item) => {
    return { date: item.date, amount: item.amount };
  });

  const spendingData = sortedTransactions.filter((transaction) => {
    if (transaction.type == "expense") {
      return { tag: transaction.tag, amount: transaction.amount };
    }
  });

  const newSpendings = [
    { tag: "food", amount: 0 },
    { tag: "education", amount: 0 },
    { tag: "personal", amount: 0 },
    { tag: "other", amount: 0 },
  ];

  spendingData.forEach((item) => {
    if (item.tag == "food") {
      newSpendings[0].amount += item.amount;
    } else if (item.tag == "education") {
      newSpendings[1].amount += item.amount;
    } else if (item.tag == "personal") {
      newSpendings[2].amount += item.amount;
    } else {
      newSpendings[3].amount += item.amount;
    }
  });

  const config = {
    data: data,
    width: 500,
    autoFit: true,
    xField: "date",
    yField: "amount",
  };

  const spendingConfig = {
    data: newSpendings,
    width: 500,
    angleField: "amount",
    colorField: "tag",
  };

  let chart;
  let pieChart;

  return (
    <div className="charts-wrapper">
      <div>
        <h2>Your Analytics</h2>
        <Line
          {...config}
          onReady={(chartInstance) => (chart = chartInstance)}
        />
      </div>
      <div>
        <h2>Your Spendings</h2>
        <Pie
          {...spendingConfig}
          onReady={(chartInstance) => (pieChart = chartInstance)}
        />
      </div>
    </div>
  );
}

export default ChartComponent;
