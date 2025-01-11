import { ECOption } from "../../interfaces/echarts/lineGrafic";

export const lineGraficData: ECOption = {
  tooltip: {
    trigger: "axis",
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  legend: {
    data: ["tarea1", "tarea2", "tarea3"],
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["01", "02", "03", "04", "05", "06", "07"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "tarea1",
      type: "line",
      stack: "Total",
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: "tarea2",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: "tarea3",
      type: "line",
      stack: "Total",
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
};
