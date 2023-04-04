d3.csv('/astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    // width: 500,
    // height: 300,
    marks: [
      Plot.boxY(data, {x: "genero", y: "edad_mision", fill: d=>d.genero=='femenino'?'pink':'lightblue'}),
      Plot.text(data,          
        Plot.groupX({ y:"median", text:"first"}, {
          x: "genero", 
          y: "edad_mision", 
          text: d => d.genero == "femenino" ? `${"42"}` : d.genero == "masculino" ? `${"47"}` : "",
          dy : -10
        }))     
    ],
    grid: true,
    line: true,
    nice: true,
    color:{
      type: 'categorical',
      legend: true
    },
    x: {
      label: "Género",
      paddingInner: 0.5,
      paddingOuter: 0.6
    },
    y: {
      label: "Edad al momento de la misión"
    },
    
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})
