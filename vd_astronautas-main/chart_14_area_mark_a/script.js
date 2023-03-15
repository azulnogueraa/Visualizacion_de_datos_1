d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.areaY(
        data.filter(d => d.nacionalidad == 'EE.UU.'),
        {
          x: 'nombres',
          y: 'anio_mision',
          opacity: 0.3,
        },
      ),
    ],
    line: true,
    x: {
      tickFormat: 'd',
      ticks: 11,
    },
    y: {
      ticks: 7,
      grid: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
