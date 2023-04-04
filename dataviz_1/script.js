d3.csv('astronautas.csv', d3.autoType).then(data => {

  let chart = Plot.plot({
    marks: [
    Plot.barY(
      data,
      Plot.groupX({ y: "count" }, { x: "anio_mision", fill: "steelblue"}),
    ),
    Plot.text(
      data,
      Plot.groupX({ text: "count", y:"count"}, { x: "anio_mision", dy:-10})
    )
  ],
    // grid: true,
    line: true,
    nice: true,
    //height: 300, // increase chart height
    // marginLeft: 100, // increase left margin
    // marginRight: 20, // increase right margin
    y:{domain:[0,31],
      label: "Cantidad de astronautas en la misión",
      tickFormat: () => "",
      tickSize: () => "",
    },
    x:{label: "Año de la misión",
    labelPadding: 30,
    tickPadding: 1.5,
  }
  })

  /* Agrega el chart al DOM */
  d3.select('#chart').append(() => chart)
})
