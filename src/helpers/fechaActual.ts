export const fechaActual = () => {
  const dia = new Date().getDate();
  const mes = new Date().getMonth();
  const anio = new Date().getFullYear();
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
  return `${dia > 9 ? dia : `0${dia}`} ${meses[mes]} ${anio}`;
};
