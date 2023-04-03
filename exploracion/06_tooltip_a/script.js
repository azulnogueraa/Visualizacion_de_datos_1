let chart;
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.table(data);

  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "anio_nacimiento",
        y: "edad_mision",
        r: "mision_hs",
        fill: "ocupacion",
        opacity: 0.5,
        title: "nombre",
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  });

  d3.select("#chart").append(() => chart);
});
