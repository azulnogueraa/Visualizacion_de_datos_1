d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barY(data, {
        x: 'ocupacion',
        y: 'mision_hs',
        fill: 'nombre',
        sort: 'mision_hs',
        title: d => d.nombre + '\n' + d.mision_hs,
      }),
    ],
    marginLeft: 70,
    width: 700,
  })
  d3.select('#chart').append(() => chart)
})
