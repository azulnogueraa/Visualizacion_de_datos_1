let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  console.table(data)

  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: "edad_mision",
        y: "anio_nacimiento",
        r: "mision_hs",
        fill: "ocupacion",
        opacity: 0.5,
        title: d => `${d.nombre}
Edad de Emisión: ${d.edad_mision}
Año de nacimiento: ${d.anio_nacimiento}
Nacionalidad: ${d.nacionalidad}`, 

      }),
    ],
    grid: true,
    line: true,
    nice: true,
    color: {
      legend: true,
    },
  })

  d3.select('#chart').append(() => chart)
})
