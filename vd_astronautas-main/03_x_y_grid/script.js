d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "anio_mision", y: "edad_mision" })],
    x: {
      grid: true,
      line: true,
      nice: true,
    },
    y: {
      nice: true,
      line: true,
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
});
