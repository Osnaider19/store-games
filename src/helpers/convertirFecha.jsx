export const convertirFecha = (fechaOriginal) => {
    const partesFecha = fechaOriginal.split("-");
    const fecha = new Date(partesFecha[0], partesFecha[1] - 1, partesFecha[2]);
    const meses = [
      "ene",
      "feb",
      "mar",
      "abr",
      "may",
      "jun",
      "jul",
      "ago",
      "sep",
      "oct",
      "nov",
      "dic",
    ];
    const nombreMes = meses[fecha.getMonth()];
    const nuevaFecha = fecha.getDate() + " " + nombreMes + " " + fecha.getFullYear();
    return nuevaFecha
  };