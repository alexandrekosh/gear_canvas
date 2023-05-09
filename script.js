const canvas = document.querySelectorAll('canvas');
const superior = canvas[0].getContext('2d');
const lateral = canvas[1].getContext('2d');

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
  superior.moveTo(250, 0)
  superior.lineTo(250, 500)
  lateral.moveTo(250, 0)
  lateral.lineTo(250, 250)
  superior.stroke()

  superior.beginPath()
  superior.moveTo(0, 250)
  superior.lineTo(500, 250)
  superior.stroke()
}

function drawFuro(r) {
  superior.beginPath()
  superior.arc(250, 250, r, 0, 2*Math.PI) // furo
  superior.stroke()
}

function drawInterno(r_interno) {
  superior
  superior.beginPath()
  superior.arc(250, 250, r_interno, 0, 2*Math.PI) // interno
  superior.stroke()
}

function drawPrimitivo(r_primitivo) {

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 6, 1.99*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 5.7, 1.9*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 5.4, 1.8*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 5.1, 1.7*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 4.8, 1.6*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 4.5, 1.5*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 4.2, 1.4*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 3.8, 1.3*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 3.5, 1.2*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 3.2, 1.1*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 2.9, 1*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 2.6, 0.9*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 2.3, 0.8*Math.PI) // primitivo
  superior.stroke()
  
  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 2, 0.7*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 1.7, 0.6*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 1.4, 0.5*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 1.1, 0.4*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 0.8, 0.3*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 0.4, 0.2*Math.PI) // primitivo
  superior.stroke()

  superior.beginPath()
  superior.arc(250, 250, r_primitivo, 0, 0.1 *Math.PI) // primitivo
  superior.stroke()
}

function drawExterno(r_externo) {
  superior.beginPath()
  superior.arc(250, 250, r_externo, 0, 2*Math.PI) // externo
  superior.stroke()
}

function drawRefoco(r_interno, g) {
  superior.beginPath()
  superior.arc(250, 250, r_interno - g, 0, 2*Math.PI) // reforço
  superior.stroke()
}

function drawDc(r) {
  superior.beginPath()
  superior.arc(250, 250, 100, 0, 2*Math.PI) // dc
  superior.stroke()
}

function drawChaveta(altura_chaveta, largura_chaveta, r) {
  superior.beginPath()
  superior.rect( 250 - 95, 250 - largura_chaveta,  largura_chaveta,  altura_chaveta)
}

function drawL(r_externo){
  superior.beginPath()
  lateral.rect( (r_externo / 4), 100, r_externo * 2, 40)
  lateral.stroke()
}


drawRefoco(r_interno, g)
drawInterno(r_interno)
drawDc()
drawChaveta(altura_chaveta, largura_chaveta)
lineCenter()

drawFuro(r);

// superior.strokeStyle = 'gray'
drawExterno(r_externo)

// superior.strokeStyle = 'blue'
drawPrimitivo(r_primitivo)

drawL(r_externo)
