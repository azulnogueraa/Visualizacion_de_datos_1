d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'anio_nacimiento',
        r: 'eva_mision_hs',
        fill: 'genero',
        symbol: "genero",
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    symbol: {
      legend: "true",
    },
  });

  d3.select("#chart").append(() => chart);
});
