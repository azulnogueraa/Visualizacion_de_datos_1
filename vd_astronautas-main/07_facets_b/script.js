let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'mision_hs',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
        title: 'nacionalidad',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    width: 800,
    height: 200,
    r: { range: [5, 15] },
    facet: {
      data: data,
      x: 'genero',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})
