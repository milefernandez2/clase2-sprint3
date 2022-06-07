const payments = [];

function addElementToList() {
    let nombre = $('#nombre').val();
    let pago = $('#pago').val();

    payments.push({
        'nombre': nombre, 
        'pago': pago
    })

    console.log(payments);
}

function lastAddedToScreen() {
    let ultimo = payments[payments.length-1];

    $('#list-group').append(`<li> ${ultimo['nombre']}: $${ultimo['pago']} </li>`)
}

function sumarArray(arraySuma) {
    let suma = 0;
    for(let i = 0; i < arraySuma.length; i++) {
        suma += parseFloat(arraySuma[i].pago);
    }
    return suma;
}

function showPaymentInHTML() {
    let resultadoArray = sumarArray(payments);
    let divisionArray = resultadoArray/payments.length;

    /* let parrafo = document.getElementById('total');
    parrafo.innerHTML = `Total: $${resultadoArray} A cada uno le toca aportar: $${divisionArray}`; */

    $('#total').text(`Total: $${resultadoArray} A cada uno le toca aportar: $${divisionArray}`)
}

function repartir() {
    // Agregar elemento a la lista de pagos (payments)
    addElementToList();
    // Agregar a HTML el último elemento de la lista
    lastAddedToScreen();
    // Calcular el total (cuanto paga cada uno)
    showPaymentInHTML();
};
