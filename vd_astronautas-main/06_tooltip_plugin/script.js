import addTooltips from "./addTooltips.js";
let chart;
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    marks: [
      Plot.dot(data, {
        x: "mision_hs",
        y: "edad_mision",
        r: "eva_mision_hs",
        fill: "ocupacion",
        fillOpacity: 0.5,
        title: (d) => `${d.nacionalidad}`,
      }),
    ],
    color: {
      legend: "ramp",
      range: ["#a3c4f3", "#ffd670", "#ff9770", "#8eecf5", "#60d394", "#ffef9f"],
    },
    x: {
      domain: [0, d3.max(data, (d) => d.mision_hs)],
    },
    y: {
      tickFormat: d3.format(".0f"),
      domain: [0, d3.max(data, (d) => d.edad_mision)],
      //range: {30,100},
    },
    r: {
      range: [3, 15],
    },
  });
  addTooltips(chart);
  d3.select("#chart").append(() => chart);
});
