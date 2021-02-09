'use strict'

/*
create two dimensional array, add following values to it.
1   2   3   4   ..  10
2   4   6   8   ..  20
.....
10  20  30  40  ..  100
*/

let table = []

for(let i = 1; i <= 10; i++){
    let row = []
    let x = i
    for(let j = 0; j < 10; j++){
        row.push(x)
        x = x + i
    }
    table.push(row)

}
console.log(table)