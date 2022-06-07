let objeto = {}; // objeto vacío

// Los objetos tienen atributos
// Los atributos se definen como clave: valor

let otroObjeto = {
    'color': 'rojo',
    'alto': 15 
}

console.log(otroObjeto.color);
console.log(otroObjeto.alto);


let array = [1,'hola',33,'quince'];
console.log(array[0]);
console.log(otroObjeto['color']);
console.log(importScripts['alto']);

let propiedad = 'color';
console.log(otroObjeto[propiedad]);
console.log(otroObjeto.propiedad); //undefined

let objetosAnidados = {
    'color': 'rojo',
    'alto': 34,
    'propietario': {}
}

console.log(objetosAnidados['propietario']);

objetosAnidados.color = 'verde';



console.log()




let objetosAnidados2 = {
    'color': 'rojo',
    'alto': 34,
    'propietario': {
        'usuario': 'julian'
    }
}
console.log(objetosAnidados2.propietario.usuario);

//JSON
//API REST: expone URLs

//GET /usuarios --> 
