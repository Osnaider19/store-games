export function last30Days() {
  const fechaActual = new Date();

  const fechaPasada = new Date(fechaActual);

  fechaPasada.setDate(fechaPasada.getDate() - 30);

  const añoActual = fechaActual.getFullYear();

  const mesActual = (fechaActual.getMonth() + 1).toString().padStart(2, "0");

  const díaActual = fechaActual.getDate().toString().padStart(2, "0");
  const fechaActualFormateada = `${añoActual}-${mesActual}-${díaActual}`;

  const añoPasado = fechaPasada.getFullYear();
  const mesPasado = (fechaPasada.getMonth() + 1).toString().padStart(2, "0");
  const díaPasado = fechaPasada.getDate().toString().padStart(2, "0");
  const fechaPasadaFormateada = `${añoPasado}-${mesPasado}-${díaPasado}`;
  const rangoFechas = `${fechaPasadaFormateada},${fechaActualFormateada}`;
  return rangoFechas;
}
