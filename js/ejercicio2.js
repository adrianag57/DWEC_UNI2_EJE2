var x = parseFloat(prompt("Introduzca un valor numérico:"));
var y = parseFloat(prompt("Introduzca el segundo valor numérico:"));

console.log("El número " + y + " redondeado al alza es " + Math.ceil(y));
console.log("El número " + x + " redondeado a la baja es " + Math.ceil(y));
console.log("El entero más próximo de " + y + " es " + Math.round(y));
console.log("Un valor aleatorio entre 0 y 1 es: " + Math.random());
console.log("El valor de " + x + " elevado a " + y + " es " + Math.pow(x,y));
console.log("La raiz cudrada de " + y + " es " + Math.sqrt(y));
console.log("El máximo entre " + x + " y " + y + " es " + Math.max(x, y) + " y el mínimo es " + Math.min(x, y));