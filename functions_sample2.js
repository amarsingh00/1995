'use strict';

function greet(print_name){
    console.log('Hello  ', print_name)
}

let name0 = 'Amar'
greet(name0)

//when we pass value to the function, we call it argument.

function greet2(print_name, print_day){
    console.log('Hello  ', print_name, 'Day is  ', print_day)
}

greet2(name0)