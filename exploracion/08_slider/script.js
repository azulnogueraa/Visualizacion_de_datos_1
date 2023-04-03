let chart
let data
let valuesDomainX
let valuesDomainY

let selectElement = d3.select('#input')
selectElement.on('input', event => {
  let yearSelected = event.target.value
  changeValueInput(yearSelected)
  createChart(yearSelected)
})

d3.csv('astronautas.csv', d3.autoType).then(dataChart => {
  data = dataChart
  let initYear = selectElement.attr('value')
  valuesDomainX = [d3.min(data, d => d.mision_hs), d3.max(data, d => d.mision_hs)]
  valuesDomainY = [d3.min(data, d => d.edad_mision), d3.max(data, d => d.edad_mision)]
  changeValueInput(initYear)
  createChart(initYear)
})

function changeValueInput(value) {
  const resultado = document.querySelector('#value-input')
  resultado.textContent = value
}

function createChart(yearSelected) {
  let dataFilter = data.filter(d => d.anio_mision == yearSelected)
  chart = Plot.plot({
    grid: true,
    line: true,
    nice: true,
    zero: true,
    r: {range: [3,15]},
    marks: [
      Plot.dot(dataFilter, {
        x: 'mision_hs',
        y: 'edad_mision',
        fill: 'ocupacion',
        fillOpacity: 0.6,
        r: 'eva_mision_hs',
        title: 'nombre',
      }),
    ],
    color: {
      legend: true,
      className: 'legend-clusters',
    },
    x: {
      domain: valuesDomainX,
    },
    y: {
      domain: valuesDomainY,
    },
  })

  /* Agrega un título a la leyenda x d3 */
  d3.select(chart)
    .select('.legend-clusters')
    .insert('h4', 'span')
    .attr('class', 'legend-title')
    .text('Grupos de países: ')
    .classed('legend-title')

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
}
