import { SidebarOptions } from "@/interfaces/data/SidebarInterfaces";

export const sidebarOptions: SidebarOptions[] = [
  {
    name: "Dashboard",
    icon: "/assets/dashboard.svg",
    redirect: "/dashboard",
    subOptions: [],
  },
  {
    name: "Requerimientos",
    icon: "/assets/requerimiento.svg",
    redirect: "/requerimientos",
    subOptions: [
      {
        name: "Ver todos los requerimientos",
        redirect: "/requerimientos/ver-todos",
      },
      {
        name: "Crear nuevo requerimiento",
        redirect: "/requerimientos/crear",
      },
      {
        name: "Categorías de requerimientos",
        redirect: "/requerimientos/categorias",
      },
      {
        name: "Historial de requerimientos",
        redirect: "/requerimientos/historial",
      },
    ],
  },
  {
    name: "Tareas",
    icon: "/assets/tarea.svg",
    redirect: "/tareas",
    subOptions: [
      { name: "Ver todas las tareas", redirect: "/tareas/ver-todas" },
      { name: "Crear nueva tarea", redirect: "/tareas/crear" },
      { name: "Ver proyectos", redirect: "/tareas/proyectos" },
      { name: "Asignar tareas", redirect: "/tareas/asignar" },
    ],
  },
  {
    name: "Inventarios",
    icon: "/assets/inventario.svg",
    redirect: "/inventarios",
    subOptions: [
      { name: "Ver inventarios", redirect: "/inventarios/ver" },
      {
        name: "Crear nuevo producto",
        redirect: "/inventarios/crear-producto",
      },
      {
        name: "Control de stock y alertas",
        redirect: "/inventarios/control-stock",
      },
      {
        name: "Reportes de inventario",
        redirect: "/inventarios/reportes",
      },
    ],
  },
  {
    name: "Clientes (CRM)",
    icon: "/assets/cliente.svg",
    redirect: "/clientes",
    subOptions: [
      { name: "Ver clientes", redirect: "/clientes/ver" },
      { name: "Crear nuevo cliente", redirect: "/clientes/crear" },
      {
        name: "Oportunidades de ventas",
        redirect: "/clientes/oportunidades",
      },
      {
        name: "Seguimiento y comunicaciones",
        redirect: "/clientes/seguimiento",
      },
    ],
  },
  {
    name: "Documentos",
    icon: "/assets/documento.svg",
    redirect: "/documentos",
    subOptions: [
      { name: "Ver documentos", redirect: "/documentos/ver" },
      { name: "Subir documento", redirect: "/documentos/subir" },
      {
        name: "Control de versiones y permisos",
        redirect: "/documentos/control",
      },
    ],
  },
  {
    name: "Proyectos",
    icon: "/assets/proyecto.svg",
    redirect: "/proyectos",
    subOptions: [
      { name: "Ver proyectos", redirect: "/proyectos/ver" },
      { name: "Crear proyecto", redirect: "/proyectos/crear" },
      {
        name: "Asignar tareas a proyectos",
        redirect: "/proyectos/asignar-tareas",
      },
      { name: "Cronograma y hitos", redirect: "/proyectos/cronograma" },
    ],
  },
  {
    name: "Recursos Humanos (HRM)",
    icon: "/assets/recursosHumano.svg",
    redirect: "/recursos-humanos",
    subOptions: [
      { name: "Ver empleados", redirect: "/recursos-humanos/empleados" },
      {
        name: "Contratar nuevo empleado",
        redirect: "/recursos-humanos/contratar",
      },
      {
        name: "Evaluación de desempeño",
        redirect: "/recursos-humanos/evaluacion",
      },
      {
        name: "Permisos y ausencias",
        redirect: "/recursos-humanos/permisos",
      },
    ],
  },
  {
    name: "Finanzas",
    icon: "/assets/finanza.svg",
    redirect: "/finanzas",
    subOptions: [
      { name: "Ver facturas", redirect: "/finanzas/facturas" },
      { name: "Generar factura", redirect: "/finanzas/generar-factura" },
      {
        name: "Reportes de ingresos/egresos",
        redirect: "/finanzas/reportes-ingresos",
      },
      {
        name: "Reportes financieros",
        redirect: "/finanzas/reportes-financieros",
      },
    ],
  },
  {
    name: "Soporte al Cliente",
    icon: "/assets/soporte.svg",
    redirect: "/soporte-cliente",
    subOptions: [
      { name: "Ver tickets", redirect: "/soporte-cliente/tickets" },
      { name: "Crear ticket", redirect: "/soporte-cliente/crear-ticket" },
      {
        name: "Responder tickets",
        redirect: "/soporte-cliente/responder-tickets",
      },
      {
        name: "Base de conocimiento (FAQ)",
        redirect: "/soporte-cliente/faq",
      },
    ],
  },
  {
    name: "Configuraciones",
    icon: "/assets/configuracion.svg",
    redirect: "/configuracion",
    subOptions: [
      {
        name: "Configuración de cuenta",
        redirect: "/configuracion/cuenta",
      },
      {
        name: "Gestión de roles y permisos",
        redirect: "/configuracion/roles",
      },
      {
        name: "Configuración de notificaciones",
        redirect: "/configuracion/notificaciones",
      },
      {
        name: "Ajustes generales de la app",
        redirect: "/configuracion/ajustes",
      },
    ],
  },
];
