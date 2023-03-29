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
        label: 'min edad, max edad',
        labelAnchor: 'right',
        tickSize: 5,
      },
      style: {
        fontSize: 20,
      },
      height: 600,
      width: 1350,
      marginLeft: 230,
      marginRight: 230,
      grid: true,
      nice: true,
      line: true,

    })
    d3.select('#chart').append(() => chart)
  })
  

  