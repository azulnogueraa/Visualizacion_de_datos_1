let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {

    const dataUS = data.filter(d => d.nacionalidad == "EE.UU.")
    const dataFiltered = data.filter(d => d.nacionalidad == "EE.UU." || d.nacionalidad == "Italia" || d.nacionalidad == "Japon" || d.nacionalidad == "U.S.S.R/Rusia")

    chart = Plot.plot({
        marks: [
            Plot.barY(dataUS, {
                x: 'ocupacion',
                y: 'mision_hs',
                fill: 'white',
                fillOpacity: 0.2,
                }),
            Plot.barY(dataFiltered, {
                x: 'ocupacion',
                y: 'mision_hs',
                fill: 'ocupacion',
                fillOpacity: 1,
                title: 'nombre',
              }),
              Plot.frame(),
              
            ],
        
            grid: true,
            nice: true,
            width: 1200,
            height: 600,
            marginLeft: 55,
            marginRight: 55,
            facet: {
              data: dataFiltered,
              x: 'nacionalidad',
            },
        
            color: {
              legend: true,
              range: ["#ccff33", "#ff0066", "#9933ff", "#3399ff"],
              className: 'legend-clusters',
            },
        
            x: {axis: null},
            y: {grid: true},
            
          })
          d3.select('#chart').append(() => chart)

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

        })
        
        