d3.csv('data.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.line(data, {
        x: 'year',
        y: 'fertility',
        z: 'country',
        stroke: 'fertility',
      }),
    ],
    x: {
      // https://github.com/observablehq/plot#formats
      tickFormat: 'd',
    },
    y: { zero: true },
    line: true,
  })
  d3.select('#chart').append(() => chart)
})
