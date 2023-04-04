d3.csv('../astronautas.csv', d3.autoType).then(data => {   
  let chart = Plot.plot({     
    marks: [       
    Plot.dot(data, Plot.groupX({y:"mean"},{         
        x: 'anio_mision',         
        y: 'edad_mision',         
        fill: (d) => d.anio_mision == '2014' ? 'purple' : d.anio_mision == '2017' ? 'orange' : 'steelblue',
     })),       
     Plot.linearRegressionY(data, {
      x: "anio_mision", 
      y: "edad_mision", 
      stroke: "red", 
      ci: 0.95}),       
      Plot.text(data,          
        Plot.groupX({ y:"mean", text:"first"}, {
          x: "anio_mision", 
          y: "edad_mision", 
          text: d => d.anio_mision == "2014" ? `${"Menor promedio"}` : d.anio_mision == "2017" ? `${"Mayor promedio"}` : "",
          dy : -10
        }))     
    ],     
    grid: true,     
    line: true,     
    nice: true,     
    color: {       legend: true,     },     
    x:{       label: "Año de la misión",     },     
    y:{       domain:[43,50],       
    label: "Edad promedio de las tripulaciones"     }   })   
    
    /* Agrega el chart al DOM */   
d3.select('#chart').append(() => chart) })
