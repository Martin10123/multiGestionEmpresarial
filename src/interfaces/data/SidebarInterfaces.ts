export interface SidebarOpciones {
  nombre: string;
  icono: string;
  redireccion: string;
  subOpciones: SidebarSubOpciones[];
}

interface SidebarSubOpciones {
  nombre: string;
  redireccion: string;
}
