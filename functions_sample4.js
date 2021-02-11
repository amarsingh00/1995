'use strict';

function greetings(name){
    let message = ('Hello ' + name)
    return message
}

console.log(greetings())
// output Hello undefined

console.log(greetings('Amar'))
// output Hello Amar

let output = greetings('Amar')
console.log(output)
// output Hello Amar