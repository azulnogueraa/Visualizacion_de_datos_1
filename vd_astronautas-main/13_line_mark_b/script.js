d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'anio_mision',
        y: 'mision_hs',
        z: 'nacionalidad',
        stroke: 'nacionalidad',
        strokeWidth: 3,
        opacity: 0.5,
        // https://github.com/observablehq/plot#curves
        curve: 'natural',
      }),
    ],
  })
  d3.select('#chart').append(() => chart)
})
