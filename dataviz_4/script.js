d3.csv('../astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        data, 
        Plot.groupY(
          {x:"mean"},
          {
            x: 'mision_hs',
            y: 'ocupacion',
            fill: d=>d.ocupacion=='ingeniero aeroespacial'?'steelblue':'gray',
            sort:{
              y: 'x', 
              reverse: true
            }
          },
      
        )
      ),
    ],
    color: {
      legend: false,
    },
    x:{
      label: "Horas por misión",
      grid: true,
    },
    y:{
      label: ""
    },
    height: 200,
    marginLeft: 170,
  })
  d3.select('#chart').append(() => chart)
})
