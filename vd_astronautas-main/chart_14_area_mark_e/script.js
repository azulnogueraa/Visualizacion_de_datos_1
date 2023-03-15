d3.csv('data.csv', d3.autoType).then(data => {
  let dataABC = data.filter(
    d => d.country === 'Argentina' || d.country === 'Brasil' || d.country === 'Chile',
  )

  // adaptamos los datos con los máx y min de fertilidad de c/ año
  let dataMinMax = d3
    .groups(dataABC, d => d.year)
    .map(d => {
      return {
        year: d[0],
        min: d3.min(d[1], d => d.fertility),
        max: d3.max(d[1], d => d.fertility),
      }
    })
  console.log(dataMinMax)

  let chart = Plot.plot({
    marks: [
      Plot.areaY(dataMinMax, {
        x: 'year',
        y1: 'min',
        y2: 'max',
        fillOpacity: 0.3,
      }),
      Plot.lineY(dataMinMax, { x: 'year', y: d => (d.max + d.min) / 2 }),
    ],
    x: {
      tickFormat: 'd',
    },
    y: {
      grid: true,
      label: 'Min - Máx fertility',
    },
    line: true,
  })
  d3.select('#chart').append(() => chart)
})

function createChart(data) {}
