'use strict'

// function hoisting
function Greet1(name0){
    console.log('Hello  '+name0)
}

// Greet2(nameX)

// function expression
// in this function must be defined before it can be called.
// ReferenceError: Cannot access 'Greet2' before initialization

let Greet2 = function(name0){
    console.log('Hello '+ name0)
}

let Greet3 = (name0) => {
    console.log('Hello  '+ name0)
}

let nameX = 'Amar'

Greet1(nameX)
Greet2(nameX)
Greet3(nameX)