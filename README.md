# gear_canvas

Esse mini projeto foi feito para ser utilizado no [gear-machine](https://github.com/alexandrekosh/gear-machine) , usando o canvas do html para simular uma engrenagem de dentes retos

## desenvolvimento
Para cada um dos diametros, linhas ou retangulos, eu utilizei funções em base no calculo. 

>como por exemplo:
```javascript
function drawInterno(r_interno) {
  vista.beginPath()
  vista.arc(250, 250, r_interno, 0, 2*Math.PI) // interno
  vista.stroke()
}
```
>cria o diametro externo da engrenagem

## tecnologias
- Html Canvas
- JavaScript
- Front-Editor
