import addTooltips from "./dotgraph_add_tooltip.js";
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
    width: 1100,
    height: 500,
    grid: true,
    line: true,
    nice: true,
    r: {range: [5,15]},
    x: {
      domain: valuesDomainX,
      label: 'Horas de Misión'
    },
    y: {
      domain: valuesDomainY,
      label: 'Edad de Astronauta'
    },
    

    marks: [
      Plot.dot(dataFilter, {
        x: 'mision_hs',
        y: 'edad_mision',
        fill: 'ocupacion',
        title: 'nombre', 
        r: 5
      }),
    ],

    color: {
      legend: true,
      range: ["#3399ff", "#ff0066", "#9933ff", "#ccff33"],
      className: 'legend-clusters',
    },

    
  })

  d3.select('#chart figure').remove()
  d3.select('#chart').append(() => chart)
  addTooltips(chart);


  var fig = document.querySelector("figure")
  fig.childNodes[0].querySelectorAll("svg").forEach(s => {
    s.style.borderRadius = "50%";
  })
  fig.childNodes[0].querySelectorAll("span").forEach(s => {
    s.style.gap = "10px";
  })
  fig.childNodes[0].style.display = "flex";
  fig.childNodes[0].style.alignItems = "center";
  fig.childNodes[0].style.justifyContent = "center";

}


