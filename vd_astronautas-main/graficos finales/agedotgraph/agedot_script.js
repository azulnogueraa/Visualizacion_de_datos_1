d3.csv('astronautas.csv', d3.autoType).then(data => {
  
    const colorScale = d3.scaleOrdinal()
    .domain(["masculino", "femenino"])
    .range(["#3399ff", "#ff0066"]);

    let chart = Plot.plot({
        marks: [
            Plot.dot(data, 
                Plot.stackY2({
                x: 'edad_mision',
                y: d => d.genero === "masculino" ? 1 : d.genero === "femenino" ? -1 : 0,
                fill: d => colorScale(d.genero),
                size: 10,
            })),
            Plot.ruleY([0])
        ],

        width: 1200,
        height: 600,

        x: {
        label: "Edad →",
        nice: true,
        labelAnchor: 'right',
        labelOffset: 30,
        tickSize: 0,
        ticks: 5,
        },

        y: {
        grid: true,
        nice: true,
        label: "← Femenino · Masculino →",
        labelAnchor: "center",
        tickFormat: Math.abs,
        tickSize: 0,
        ticks: 10,
        },

        // color: {
        //     range: ['#f97db0', '#4f96ff'],
        //     legend: true,
        // },

    })
    d3.select('#chart').append(() => chart)

    // var fig = document.querySelector("figure")
    // fig.childNodes[0].querySelectorAll("svg").forEach(s => {
    //     s.style.borderRadius = "50%";
    // })
    // fig.childNodes[0].querySelectorAll("span").forEach(s => {
    //     s.style.gap = "10px";
    // })
    // fig.childNodes[0].style.display = "flex";
    // fig.childNodes[0].style.alignItems = "center";
    // fig.childNodes[0].style.justifyContent = "center";
  })