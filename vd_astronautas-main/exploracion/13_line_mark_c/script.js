// config. números español
const locale = {
  decimal: ',',
  thousands: '.',
  grouping: [3],
}
d3.formatDefaultLocale(locale)

d3.csv('data.csv', d3.autoType).then(data => {
  const chart = Plot.plot({
    marks: [
      Plot.line(
        data.filter(d => d.year == 1955 || d.year == 2005),
        {
          x: 'year',
          y: 'pop',
          stroke: 'country',
          opacity: 0.7,
        },
      ),
    ],
    x: {
      tickFormat: 'd',
      type: 'ordinal',
    },
    y: {
      tickFormat: d3.format(',.0f'),
      ticks: 6,
      zero: true,
    },
    width: 300,
    marginLeft: 70,
    line: true,
  })
  d3.select('#chart').append(() => chart)
})
