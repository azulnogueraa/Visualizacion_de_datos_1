d3.csv('astronautas.csv', d3.autoType).then(data => {

  data2 = {}

  data.forEach(ast => {
    var pais = ast.nacionalidad;
    var gen = ast.genero;
    var mhs = ast.mision_hs
    if (!data2[pais]){
      data2[pais] = {}
    }
    if (data2[pais][gen]){
      data2[pais][gen] += mhs;
    }
    else{
      data2[pais][gen] = mhs;
    }
  })

  data3 = []

  for (const [pais, genObj] of Object.entries(data2)){
    for (const [gen, mshs] of Object.entries(genObj)){
      data3.push({
        'nacionalidad': pais,
        'mision_hs': mshs,
        'genero': gen
      })
    }
  }

  console.log(data3)

  let chart = Plot.plot({
    marks: [
      Plot.barX(data3, {
        y: 'nacionalidad',
        x: 'mision_hs',
        fill: 'genero',
        sort: 'genero',
        r: 5,
        title: d => d.mision_hs + '\n' + d.nacionalidad,

      }),
    ],


    color: {
      range: ['#f97db0', '#4f96ff'],
      legend: true,
    },

    x: {
      label: '               Horas de Misión',
      labelOffset: 30,
      fontSize: 15,
      labelAnchor: 'right',
    },

    y: {
      label: 'Nacionalidad',
      labelOffset: 50,
      labelAnchor: 'top',
    },

    style: {
      fontFamily: 'verdana',
      fontSize:12,
    },
    
    marginLeft: 100,
    width: 1200,
    height:700,
    },

  
  )
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
