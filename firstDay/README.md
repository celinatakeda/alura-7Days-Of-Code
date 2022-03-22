## Diferença entre "==" e "==="

"==" compara se o valor da esquerda for o mesmo valor da direita, por exemplo:

javascript
if (true == “true”) //retorna true
if (10 == “10”) //retorna true
if (true == true) //retorna true
if (10 == 10) //retorna true

"===" compara os valores dos dois lados da equação, como também verifica se eles são do mesmo tipo. Por exemplo:
javascript
if (true === “true”) //retorna false
if (10 === “10”) //retorna false
if (true === true) //retorna true
if (10 === 10) //retorna true

Usamos a mesma lógica para os seus inversos "!=" e "!==". 

if (true != “true”) //retorna false
if (4 != “4”) //retorna false
if (true !== “true”) //retorna true
if (4 !== “4”) //retorna true
if (true !== true) //retorna false
if (4 !== 4) //retorna false
