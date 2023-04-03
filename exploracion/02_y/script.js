d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "status",
        y: "mision_hs",
        fill: "blue",
      }),
    ],
  });
  d3.select("#chart").append(() => chart);
});
