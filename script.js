const canvas = document.querySelector('canvas');
const vista = canvas.getContext('2d');

let scala = 1.7,
    d_primitivo = 125.00 
    d_interno = 113.40 
    d_externo = 135
    d_base = 120.74
    d = 50
    g = 7.86
    altura_chaveta = 15.00 * scala
    largura_chaveta = 7.50 * scala


function drawFuro(scala, d) {
  vista.beginPath()
  vista.strokeStyle = 'black'
  vista.fillStyle = 'black'
  vista.arc(250, 250, d * scala , 0, 2*Math.PI) // furo
  vista.stroke()
  vista.fill()
}

function drawInterno(scala, d_interno) {
  vista.beginPath()
  vista.arc(250, 250, d_interno * scala , 0, 2*Math.PI) // interno
  vista.strokeStyle = 'black'
  vista.stroke()
  vista.stroke()
}

function drawPrimitivo(scala, d_primitivo) {
  vista.beginPath()
  vista.arc(250, 250, d_primitivo * scala, 0, 2*Math.PI) // primitivo
  vista.strokeStyle = 'blue'
  vista.stroke()
  vista.stroke()
}

function drawExterno(scala, d_externo) {
  vista.beginPath()
  vista.arc(250, 250, d_externo * scala, 0, 2*Math.PI) // externo
  vista.strokeStyle = 'gray'
  vista.stroke()
}

function drawRefoco(scala, d_interno, g) {
  vista.beginPath()
  vista.arc(250, 250, (d_interno - g) * scala , 0, 2*Math.PI) // reforço
  vista.strokeStyle = 'black'
  vista.stroke()
}

function drawDc(scala, d) {
  vista.beginPath()
  vista.arc(250, 250, d * 2 * scala, 0, 2*Math.PI) // dc
  vista.strokeStyle = 'black'
  vista.stroke()
}

function drawChaveta(altura_chaveta, largura_chaveta, d) {
  vista.beginPath()
  vista.rect(250 - (7.5 + 25), 250 - 7.5,  largura_chaveta,  altura_chaveta)
  vista.strokeStyle = 'black'
  vista.stroke()
}


// drawFuro(scala, d);
drawInterno(scala, d_interno)
drawPrimitivo(scala, d_primitivo)
drawExterno(scala, d_externo)

// drawRefoco(scala, d_interno, g)
// drawDc(scala, d)

drawChaveta(altura_chaveta, largura_chaveta)
