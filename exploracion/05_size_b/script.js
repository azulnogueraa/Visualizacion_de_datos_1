d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "anio_nacimiento", y: "edad_mision", r: "mision_hs" })],
    r: { range: [0, 50] },
    nice: true,
    line: true,
    grid: true,
  });
  d3.select("#chart").append(() => chart);
});
