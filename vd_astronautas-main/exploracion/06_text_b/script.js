let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "anio_nacimiento",
        r: "mision_hs",
        fill: "ocupacion",
        opacity: 0.4,
      }),
      Plot.text(data, {
        x: 'edad_mision',
        y: 'anio_nacimiento',
        text: d => (d.eva_mision_hs > 20 ? d.nacionalidad : ''),
      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart').append(() => chart)
})
