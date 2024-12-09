import { SidebarOpciones } from "@/interfaces/data/SidebarInterfaces";

export const sidebarOptions: SidebarOpciones[] = [
  {
    nombre: "Dashboard",
    icono: "/assets/dashboard.svg",
    redireccion: "/dashboard",
    subOpciones: [],
  },
  {
    nombre: "Requerimientos",
    icono: "/assets/requerimiento.svg",
    redireccion: "/requerimientos",
    subOpciones: [
      {
        nombre: "Ver todos los requerimientos",
        redireccion: "/requerimientos/ver-todos",
      },
      {
        nombre: "Crear nuevo requerimiento",
        redireccion: "/requerimientos/crear",
      },
      {
        nombre: "Categorías de requerimientos",
        redireccion: "/requerimientos/categorias",
      },
      {
        nombre: "Historial de requerimientos",
        redireccion: "/requerimientos/historial",
      },
    ],
  },
  {
    nombre: "Tareas",
    icono: "/assets/tarea.svg",
    redireccion: "/tareas",
    subOpciones: [
      { nombre: "Ver todas las tareas", redireccion: "/tareas/ver-todas" },
      { nombre: "Crear nueva tarea", redireccion: "/tareas/crear" },
      { nombre: "Ver proyectos", redireccion: "/tareas/proyectos" },
      { nombre: "Asignar tareas", redireccion: "/tareas/asignar" },
    ],
  },
  {
    nombre: "Inventarios",
    icono: "/assets/inventario.svg",
    redireccion: "/inventarios",
    subOpciones: [
      { nombre: "Ver inventarios", redireccion: "/inventarios/ver" },
      {
        nombre: "Crear nuevo producto",
        redireccion: "/inventarios/crear-producto",
      },
      {
        nombre: "Control de stock y alertas",
        redireccion: "/inventarios/control-stock",
      },
      {
        nombre: "Reportes de inventario",
        redireccion: "/inventarios/reportes",
      },
    ],
  },
  {
    nombre: "Clientes (CRM)",
    icono: "/assets/cliente.svg",
    redireccion: "/clientes",
    subOpciones: [
      { nombre: "Ver clientes", redireccion: "/clientes/ver" },
      { nombre: "Crear nuevo cliente", redireccion: "/clientes/crear" },
      {
        nombre: "Oportunidades de ventas",
        redireccion: "/clientes/oportunidades",
      },
      {
        nombre: "Seguimiento y comunicaciones",
        redireccion: "/clientes/seguimiento",
      },
    ],
  },
  {
    nombre: "Documentos",
    icono: "/assets/documento.svg",
    redireccion: "/documentos",
    subOpciones: [
      { nombre: "Ver documentos", redireccion: "/documentos/ver" },
      { nombre: "Subir documento", redireccion: "/documentos/subir" },
      {
        nombre: "Control de versiones y permisos",
        redireccion: "/documentos/control",
      },
    ],
  },
  {
    nombre: "Proyectos",
    icono: "/assets/proyecto.svg",
    redireccion: "/proyectos",
    subOpciones: [
      { nombre: "Ver proyectos", redireccion: "/proyectos/ver" },
      { nombre: "Crear proyecto", redireccion: "/proyectos/crear" },
      {
        nombre: "Asignar tareas a proyectos",
        redireccion: "/proyectos/asignar-tareas",
      },
      { nombre: "Cronograma y hitos", redireccion: "/proyectos/cronograma" },
    ],
  },
  {
    nombre: "Recursos Humanos (HRM)",
    icono: "/assets/recursosHumano.svg",
    redireccion: "/recursos-humanos",
    subOpciones: [
      { nombre: "Ver empleados", redireccion: "/recursos-humanos/empleados" },
      {
        nombre: "Contratar nuevo empleado",
        redireccion: "/recursos-humanos/contratar",
      },
      {
        nombre: "Evaluación de desempeño",
        redireccion: "/recursos-humanos/evaluacion",
      },
      {
        nombre: "Permisos y ausencias",
        redireccion: "/recursos-humanos/permisos",
      },
    ],
  },
  {
    nombre: "Finanzas",
    icono: "/assets/finanza.svg",
    redireccion: "/finanzas",
    subOpciones: [
      { nombre: "Ver facturas", redireccion: "/finanzas/facturas" },
      { nombre: "Generar factura", redireccion: "/finanzas/generar-factura" },
      {
        nombre: "Reportes de ingresos/egresos",
        redireccion: "/finanzas/reportes-ingresos",
      },
      {
        nombre: "Reportes financieros",
        redireccion: "/finanzas/reportes-financieros",
      },
    ],
  },
  {
    nombre: "Soporte al Cliente",
    icono: "/assets/soporte.svg",
    redireccion: "/soporte-cliente",
    subOpciones: [
      { nombre: "Ver tickets", redireccion: "/soporte-cliente/tickets" },
      { nombre: "Crear ticket", redireccion: "/soporte-cliente/crear-ticket" },
      {
        nombre: "Responder tickets",
        redireccion: "/soporte-cliente/responder-tickets",
      },
      {
        nombre: "Base de conocimiento (FAQ)",
        redireccion: "/soporte-cliente/faq",
      },
    ],
  },
  {
    nombre: "Configuraciones",
    icono: "/assets/configuracion.svg",
    redireccion: "/configuracion",
    subOpciones: [
      {
        nombre: "Configuración de cuenta",
        redireccion: "/configuracion/cuenta",
      },
      {
        nombre: "Gestión de roles y permisos",
        redireccion: "/configuracion/roles",
      },
      {
        nombre: "Configuración de notificaciones",
        redireccion: "/configuracion/notificaciones",
      },
      {
        nombre: "Ajustes generales de la app",
        redireccion: "/configuracion/ajustes",
      },
    ],
  },
];
