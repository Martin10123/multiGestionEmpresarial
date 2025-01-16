import { ColumnDef } from "@tanstack/react-table";
import dayjs from "dayjs";

export interface RowTableColumn {
  taxiID: number;
  nombreConductor: string;
  licencia: string;
  city: string;
  distancia: number;
  tarifa: number;
  fecha: string;
  modelo: string;
  anio: number;
}

export const columnsData: ColumnDef<RowTableColumn>[] = [
  {
    header: "IDTaxi",
    accessorKey: "taxiID",
  },
  {
    header: "Nombre conductor",
    accessorKey: "nombreConductor",
  },
  {
    header: "Licencia",
    accessorKey: "licencia",
  },
  {
    header: "Ciudad",
    accessorKey: "city",
  },
  {
    header: "Distancia",
    accessorKey: "distancia",
  },
  {
    header: "Tarifa",
    accessorKey: "tarifa",
  },
  {
    header: "Fecha",
    accessorKey: "fecha",
    cell: ({ getValue }) => dayjs(getValue() as string).format("DD/MM/YYYY"),
  },
  {
    header: "Modelo",
    accessorKey: "modelo",
  },
  {
    header: "Año",
    accessorKey: "anio",
  },
];
