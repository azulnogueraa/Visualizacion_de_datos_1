let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {

    const dataUS = data.filter(d => d.nacionalidad == "EE.UU.")
    const dataFiltered = data.filter(d => d.nacionalidad == "EE.UU." || d.nacionalidad == "Italia" || d.nacionalidad == "Japon" || d.nacionalidad == "U.S.S.R/Rusia")

    chart = Plot.plot({
        marks: [
            Plot.barY(dataUS, {
                x: 'ocupacion',
                y: 'mision_hs',
                fill: 'black',
                fillOpacity: 0.2,
                }),
            Plot.barY(dataFiltered, {
                x: 'ocupacion',
                y: 'mision_hs',
                fill: 'ocupacion',
                fillOpacity: 1,
                title: 'nacionalidad',
              }),
              Plot.frame(),
            ],
        
            grid: true,
            nice: true,
            width: 1350,
            height: 400,
            facet: {
              data: dataFiltered,
              x: 'nacionalidad',
            },
        
            color: {
                legend: true,
                className: 'legend-clusters',
              },
        
            x: {axis: null},
            y: {grid: true},
            
          })
          d3.select('#chart').append(() => chart)
        })
        