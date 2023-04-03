d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'anio_mision',
        y: 'nacionalidad',
      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.anio_mision, b.anio_mision)).map(d => d.nacionalidad),
    },
    x: {
      grid: true,
    },
    height: 1000,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
