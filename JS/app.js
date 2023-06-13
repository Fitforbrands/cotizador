let prestamo;
let intereses = 1;
const tasa = 0.12;
let cuotas;
let valorCuota;

datosPrestamo();

function datosPrestamo() {
  alert("Solo valores entre 10K y 500K y cuotas entre 3 y 12");
  // e.preventDefault();
  prestamo = prompt("Cuanto dinero necesitas?");
  if (prestamo <= 500000 && prestamo >= 10000) {
    cuotas = prompt("En cuantas cuotas?");
    if (cuotas >= 3 && cuotas <= 12) {
      calcular();
    } else {
      alert(" Valor no  permitido, solo se admiten de 3 a 12 cuotas");
      datosPrestamo();
    }
  } else {
    alert("Valor no permitido: Ingresa valores entre 10K y 500K");
    datosPrestamo();
  }
}

function tasaPrestamo() {
  for (i = 0; i < cuotas; i++) {
    intereses = intereses + tasa;
  }
}

function calcular() {
  tasaPrestamo();
  valorCuota = (prestamo * intereses) / cuotas;
  console.log(
    "Solicitaste un prestamo de " + prestamo + " en " + cuotas + " cuotas"
  );
  console.log(
    "Deberas pagar " + cuotas + " cuotas de " + valorCuota.toFixed(2)
  );
  console.log(
    "El valor total del prestamo: " + (cuotas * valorCuota).toFixed(2)
  );
}
