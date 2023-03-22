d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    width:600,
    height:300,
    nice:true,
    zero:true,
    grid:true,
    color: { range:['pink', 'blue']},
    marks: [
      Plot.barY(data, {
        x: 'nacionalidad',
        y: 'mision_hs',
        fill: 'genero',
        sort: 'genero',
        r: 5,
        title: d => d.nacionalidad + '\n' + d.mision_hs,

      }),
    ],
    marginLeft: 70,
    width: 700,
  })
  d3.select('#chart').append(() => chart)
})
