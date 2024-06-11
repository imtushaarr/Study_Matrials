let jsUser = {
    name: 'Tushar',
    price: 200
}

function getData(anyobject){
    return `the username of user is ${anyobject.name} and price of the courses is ${anyobject.price}`
}

const result = getData(jsUser)

// console.log(result)

const arrValue = [100, 200, 300, 400]

function returnValues(anyindex){
    return `The value of the arrays is ${anyindex[3]}`
}

console.log(returnValues(arrValue));