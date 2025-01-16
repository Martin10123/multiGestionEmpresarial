export interface DataFakeInterfa {
  id: number;
  requeriment: string;
  category: string;
  description: string;
  priority: "Alta" | "Media" | "Baja";
  responsible: string;
  dateCreation: string;
  state: "Pendiente" | "En espera" | "En progreso" | "Completado";
  deadline: string;
}

export const dataFake: DataFakeInterfa[] = Array.from(
  { length: 200 },
  (_, i) => ({
    id: i + 1,
    requeriment: `Requerimiento ${i + 1}`,
    description: `Descripción ${i + 1}`,
    category: "Categoría " + ((i % 5) + 1),
    priority: ["Alta", "Media", "Baja"][i % 3] as "Alta" | "Media" | "Baja",
    responsible: `Responsable ${i + 1}`,
    dateCreation: `2025-01-${(i % 31) + 1}`,
    state: ["Pendiente", "En espera", "En progreso", "Completado"][i % 4] as
      | "Pendiente"
      | "En espera"
      | "En progreso"
      | "Completado",
    deadline: `2025-02-${(i % 28) + 1}`,
  })
);

// Tipos de Requerimiento
export const typesRequeriments: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Soporte Técnico" },
  { id: 2, nombre: "Mejoras" },
  { id: 3, nombre: "Nueva Funcionalidad" },
  { id: 4, nombre: "Infraestructura" },
  { id: 5, nombre: "Mantenimiento" },
  { id: 6, nombre: "Capacitación" },
  { id: 7, nombre: "Adquisición" },
  { id: 8, nombre: "Consultoría" },
  { id: 9, nombre: "Documentación" },
  { id: 10, nombre: "Otro" },
];

// Categorías
export const listCategories: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Hardware" },
  { id: 2, nombre: "Software" },
  { id: 3, nombre: "Servicios" },
  { id: 4, nombre: "Infraestructura" },
  { id: 5, nombre: "Desarrollo" },
  { id: 6, nombre: "Seguridad" },
  { id: 7, nombre: "Otro" },
];

// Prioridades
export const prioridades: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Alta" },
  { id: 2, nombre: "Media" },
  { id: 3, nombre: "Baja" },
];

// Estados
export const estados: { id: number; nombre: string }[] = [
  { id: 1, nombre: "Pendiente" },
  { id: 2, nombre: "En Proceso" },
  { id: 3, nombre: "En Espera" },
  { id: 4, nombre: "Aprobado" },
  { id: 5, nombre: "Rechazado" },
  { id: 6, nombre: "Completado" },
  { id: 7, nombre: "Cancelado" },
];
