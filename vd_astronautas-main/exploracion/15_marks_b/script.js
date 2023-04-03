d3.csv("data.csv", d3.autoType).then((data) => {
  let dataNA = data.filter( d => d.country ===  "United States" || d.country ===  "Canada" || d.country ===  "Mexico")
  createChart(dataNA)
});

function createChart(data){
  let chart = Plot.plot({
    height:500,
    width:400,
    marginLeft:60,
    marginBottom:50,
    line:true,
    color: {
      legend: true
    },
    facet: {
      data: data,
      y: "country",
      marginRight: 140
    },
    marks: [
      Plot.areaY(data, {
        x: "year", 
        y2: "pop", 
        z: "country",
        fillOpacity: 0.1
      }),
      Plot.lineY(data, {
        x: "year", 
        y: "pop",
        z: "country",
        strokeWidth: 1
      })
    ],
    x:{
      domain:[d3.min(data, (d) => d.year)-1,d3.max(data, (d) => d.year)+1],
      ticks:11,
      tickRotate:-90,
    },
    y:{
      ticks:7,
      grid:true,
    },
  });
  d3.select("#chart").append(() => chart);
};
