d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data,
        Plot.groupY(
          {
            x1: 'min',
            x2: 'max',
          },
          { x: 'mision_hs', y: 'ocupacion' },
        ),
      ),
    ],
    x: {
      label: 'Min of fertility, Max of fertility',
    },
    height: 200,
    width: 600,
    grid: true,
    nice: true,
    line: true,
  })
  d3.select('#chart').append(() => chart)
})
