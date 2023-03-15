// config. números español
const locale = {
  decimal: ',',
  thousands: '.',
  grouping: [3],
}
d3.formatDefaultLocale(locale)

d3.csv('data.csv', d3.autoType).then(data => {
  let dataABC = data.filter(
    d => d.country == 'Argentina' || d.country == 'Chile' || d.country == 'Brazil',
  )

  let chart = Plot.plot({
    marks: [
      Plot.areaY(dataABC, {
        x: 'year',
        y: 'pop',
        offset: 'silhouette',
        sort: d => -d.pop, // orden descendente
        fill: 'country',
      }),
    ],
    x: {
      tickFormat: 'd',
    },
    y: {
      tickFormat: d3.format(',.0f'),
      grid: true,
    },
    marginLeft: 70,
    line: true,
    color: {
      legend: true,
    },
  })
  d3.select('#chart').append(() => chart)
})
