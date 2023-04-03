d3.csv("astronautas.csv", d3.autoType).then((data) => {
  createChart(data);
});

function createChart(data) {
  let chart = Plot.plot({
    height: 200,
    line: true,
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "mision_hs",
        fill: "ocupacion",
        symbol:"nacionalidad"
      }),
    ],
    symbol: {
      legend: true,
    },
    x: {
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
}
