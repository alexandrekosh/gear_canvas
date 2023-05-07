const canvas = document.querySelector('canvas');
const vista = canvas.getContext('2d');

let escala = 3,
    r_primitivo = (125.00 / 2) * escala
    r_interno = (113.40 / 2) * escala
    r_externo = (135 / 2) * escala
    r_base = (120.74 / 2) * escala
    r = (50 / 2) * escala
    g = 7.86 * escala
    passo = 15.71 * escala
    expessura = 7.86 * escala
    altura_chaveta = 15.00 * escala
    largura_chaveta = 7.50 * escala



function lineCenter() {
  vista.moveTo(250, 0)
  vista.lineTo(250, 500)
  vista.stroke()

  vista.beginPath()
  vista.moveTo(0, 250)
  vista.lineTo(500, 250)
  vista.stroke()
}

function drawFuro(r) {
  vista.beginPath()
  vista.arc(250, 250, r, 0, 2*Math.PI) // furo
  vista.stroke()
}

function drawInterno(r_interno) {
  vista.beginPath()
  vista.arc(250, 250, r_interno, 0, 2*Math.PI) // interno
  vista.stroke()
}

function drawPrimitivo(r_primitivo) {

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 6, 1.99*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 5.7, 1.9*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 5.4, 1.8*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 5.1, 1.7*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 4.8, 1.6*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 4.5, 1.5*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 4.2, 1.4*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 3.8, 1.3*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 3.5, 1.2*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 3.2, 1.1*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 2.9, 1*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 2.6, 0.9*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 2.3, 0.8*Math.PI) // primitivo
  vista.stroke()
  
  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 2, 0.7*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 1.7, 0.6*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 1.4, 0.5*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 1.1, 0.4*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 0.8, 0.3*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 0.4, 0.2*Math.PI) // primitivo
  vista.stroke()

  vista.beginPath()
  vista.arc(250, 250, r_primitivo, 0, 0.1 *Math.PI) // primitivo
  vista.stroke()
}

function drawExterno(r_externo) {
  vista.beginPath()
  vista.arc(250, 250, r_externo, 0, 2*Math.PI) // externo
  vista.stroke()
}

function drawRefoco(r_interno, g) {
  vista.beginPath()
  vista.arc(250, 250, r_interno - g, 0, 2*Math.PI) // reforço
  vista.stroke()
}

function drawDc(r) {
  vista.beginPath()
  vista.arc(250, 250, 100, 0, 2*Math.PI) // dc
  vista.stroke()
}

function drawChaveta(altura_chaveta, largura_chaveta, r) {
  vista.beginPath()
  vista.rect( 250 - 95, 250 - largura_chaveta,  largura_chaveta,  altura_chaveta)
}

drawRefoco(r_interno, g)
drawInterno(r_interno)
drawDc()
drawChaveta(altura_chaveta, largura_chaveta)
lineCenter()

drawFuro(r);

vista.strokeStyle = 'gray'
drawExterno(r_externo)

vista.strokeStyle = 'blue'
drawPrimitivo(r_primitivo)
