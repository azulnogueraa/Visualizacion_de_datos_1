d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.tickX(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
      }),
    ],
    width: 600,
    height: 200,
    line: true,
    nice: true,
    grid: true,
  })
  d3.select('#chart').append(() => chart)
})
