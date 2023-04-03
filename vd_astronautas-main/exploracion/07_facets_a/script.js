let chart;
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  chart = Plot.plot({
    grid: true,
    nice: true,
    color: {
      legend: true,
    },
    facet: {
      data: data,
      x: "genero",
    },
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "mision_hs",
        fill: "ocupacion",
        fillOpacity: 0.6,
        r: "eva_mision_hs",
        title: "genero",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
