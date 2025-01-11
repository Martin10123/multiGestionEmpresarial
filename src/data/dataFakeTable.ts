export interface DataFakeInterfa {
  id: number;
  requerimiento: string;
  categoria: string;
  descripcion: string;
  prioridad: "Alta" | "Media" | "Baja";
  responsable: string;
  fechaCreacion: string;
  estado: "Pendiente" | "En Progreso" | "Completado";
  fechaLimite: string;
}

export const dataFake: DataFakeInterfa[] = Array.from(
  { length: 200 },
  (_, i) => ({
    id: i + 1,
    requerimiento: `Requerimiento ${i + 1}`,
    descripcion: `Descripción ${i + 1}`,
    categoria: "Categoría " + ((i % 5) + 1),
    prioridad: ["Alta", "Media", "Baja"][i % 3] as "Alta" | "Media" | "Baja",
    responsable: `Responsable ${i + 1}`,
    fechaCreacion: `2025-01-${(i % 31) + 1}`,
    estado: ["Pendiente", "En Progreso", "Completado"][i % 3] as
      | "Pendiente"
      | "En Progreso"
      | "Completado",
    fechaLimite: `2025-02-${(i % 28) + 1}`,
  })
);
