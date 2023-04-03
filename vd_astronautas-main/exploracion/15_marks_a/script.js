d3.csv("astronautas.csv", d3.autoType).then((data) => {
  let dataNA = data.filter( d => d.country ===  "EE.UU." || d.country ===  "Canada" || d.country ===  "Mexico")
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
