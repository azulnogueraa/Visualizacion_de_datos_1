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
      y: {
        labelAnchor: 'top',

      },
      x: {
        label: 'Min of edad_mision, Max of edad_mision',
        labelAnchor: 'right',
        tickSize: 5,
      },
      style: {
        fontSize: 20,
      },
      height: 500,
      width: 1200,
      marginLeft: 200,
      marginRight: 200,
      grid: true,
      nice: true,
      line: true,

    })
    d3.select('#chart').append(() => chart)
  })
  

  