let valor = parseInt(prompt("Ingresa el valor de la compra: "))
let ncuotas = parseInt(prompt("Ingresa el numero de cuotas: "))
let interes = parseFloat(prompt("Ingresa la tasa de interes: "))
let mantencion = parseInt(prompt("Ingresa el costo de mantencion de la tarjeta: "))
let menuString = "Que desea hacer?\n"+
                 "pruebe los siguientes comandos:\n"+
                 "\"salir\" - cerrar el programa\n"+
                 "\"mantencionTotal\" - Calcular la Mantencion Total\n"+
                 "\"valorConInteres\" - Calcular el valor de la deuda mas interes\n"+
                 "\"valorCuota\" - Calcular el valor de la cuota\n"+
                 "\"valorTotalReal\" - Calcular el valor total real de la compra\n"+
                 "\"ValorCuotaReal\" - Calcular el valor real de la cuota\n"+
                 "\"costoCredito\" - Calcular el costo del credito\n"
let salir = false

function calcularMantencionTotal(ncuotas, mantencion) {
    let mantencionTotal = ncuotas*mantencion
    return mantencionTotal
}

function calcularValorConInteres(valor, ncuotas, interes) {
    let deuda = valor
    let intereses = 0
    for (let i = 0; i < ncuotas; i++) {
        intereses = intereses + deuda*interes
        deuda = deuda*(1+interes)
        cuota = deuda/(ncuotas-i)
        deuda = deuda - cuota
    }
    deuda = valor + intereses
    return Math.ceil(deuda)
}

function calcularValorCuota(valor, ncuotas, interes) {
    cuota = calcularValorConInteres(valor, ncuotas, interes)/ncuotas
    return Math.ceil(cuota)
}

function calcularValorTotalReal(valor, ncuotas, interes, mantencion) {
    valorTotalReal = calcularValorConInteres(valor, ncuotas, interes) + calcularMantencionTotal(ncuotas, mantencion)
    return Math.ceil(valorTotalReal)
}

function calcularValorCuotaReal(valor, ncuotas, interes, mantencion) {
    valorCuotaReal = calcularValorTotalReal(valor, ncuotas, interes, mantencion)/ncuotas
    return Math.ceil(valorCuotaReal)
}

function calcularCostoCredito (valor, ncuotas, interes, mantencion) {
    costoCredito = calcularValorTotalReal(valor, ncuotas, interes, mantencion) - valor
    return costoCredito
}

function menu() {
    menuChoice = prompt(menuString)
    return menuChoice.toLowerCase()
}

mantencionTotal = calcularMantencionTotal(ncuotas, mantencion)
console.log(`El total pagado por mantencion es \$${mantencionTotal}`)

valorConInteres = calcularValorConInteres(valor, ncuotas, interes)
console.log(`El valor con interes es \$${valorConInteres}`)

valorCuota = calcularValorCuota(valor, ncuotas, interes)
console.log(`El valor de la cuota es \$${valorCuota}`)

valorTotalReal = calcularValorTotalReal(valor, ncuotas, interes, mantencion)
console.log(`El valor total real es \$${valorTotalReal}`)

valorCuotaReal = calcularValorCuotaReal(valor, ncuotas, interes, mantencion)
console.log(`El valor de la cuota real es \$${valorCuotaReal}`)

costoCredito = calcularCostoCredito(valor, ncuotas, interes, mantencion)
console.log(`El costo de comprar con credito es \$${costoCredito}`)

while (salir == false) {
    switch(menu()) {
        case "mantenciontotal":
            mantencionTotal = calcularMantencionTotal(ncuotas, mantencion)
            alert(`El total pagado por mantencion es \$${mantencionTotal}`)
            continue;

        case "valorconinteres":
            valorConInteres = calcularValorConInteres(valor, ncuotas, interes)
            alert(`El valor con interes es \$${valorConInteres}`)
            continue;

        case "valorcuota":
            valorCuota = calcularValorCuota(valor, ncuotas, interes)
            alert(`El valor de la cuota es \$${valorCuota}`)
            continue;

        case "valortotalreal":
            valorTotalReal = calcularValorTotalReal(valor, ncuotas, interes, mantencion)
            alert(`El valor total real es \$${valorTotalReal}`)
            continue;

        case "valorcuotareal":
            valorCuotaReal = calcularValorCuotaReal(valor, ncuotas, interes, mantencion)
            alert(`El valor de la cuota real es \$${valorCuotaReal}`)
            continue;

        case "costocredito":
            costoCredito = calcularCostoCredito(valor, ncuotas, interes, mantencion)
            alert(`El costo de comprar con credito es \$${costoCredito}`)
            continue;
        case "salir":
            salir = true
            break;

        default:
            salir = true
            break;
    }
}