d3.csv('astronautas.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      marks: [
        Plot.barX(
          data,
          Plot.groupY(
            {
              x1: 'min',
              x2: 'max',
            },
            { x: 'edad_mision', y: 'nacionalidad' },
          ),
        ),
      ],
      x: {
        label: 'Min of edad_mision, Max of edad_mision',
      },
      height: 200,
      width: 600,
      grid: true,
      nice: true,
      line: true,
    })
    d3.select('#chart').append(() => chart)
  })
  

  