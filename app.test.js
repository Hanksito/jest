

const {fromDollarToYen} = require("./app.js")

const {fromEuroToDollar} = require("./app.js")

const {fromYenToPound} = require("./app.js")

test("si paso 100 euros a dolares da 105,89",() =>{
    let result = fromEuroToDollar(100);
    expect(result).toBe(106)
    })

test("si paso 100 dolares a yen da 13544,05",() =>{
    let result = fromDollarToYen(100)
    expect(result).toBe(13546)
    })

test("si paso 1000 yenes a libras esterlinas da 6.01",() =>{
    let result = fromYenToPound(1000)
    expect(result).toBe(6)
})