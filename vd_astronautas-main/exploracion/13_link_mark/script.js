// config. números español
const locale = {
  decimal: ',',
  thousands: '.',
  grouping: [3],
}
d3.formatDefaultLocale(locale)

d3.csv('data.csv', d3.autoType).then(data => {
  // adaptamos los datos para la marca link
  dataParsed = data
    .filter(d => d.year == 1955 || d.year == 2005) // filtramos los 2 años
    .map(d => {
      return {
        country: d.country,
        year1: 1955,
        pop1: data.find(dat => dat.year == 1955 && dat.country == d.country).pop,
        year2: 2055,
        pop2: data.find(dat => dat.year == 2005 && dat.country == d.country).pop,
      }
    })

  let chart = Plot.plot({
    marks: [
      Plot.link(dataParsed, {
        // primer punto
        x1: 'year1',
        y1: 'pop1',
        // segundo punto
        x2: 'year2',
        y2: 'pop2',
        stroke: 'country',
        opacity: 0.7,
      }),
    ],
    x: {
      tickFormat: d3.format(',.0f'),
      type: 'ordinal',
      label: 'Años',
    },
    y: {
      label: 'Población',
      ticks: 6,
    },
    line: true,
    width: 300,
    marginLeft: 70,
  })
  d3.select('#chart').append(() => chart)
})
