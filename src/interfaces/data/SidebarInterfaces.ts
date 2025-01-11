export interface SidebarOptions {
  name: string;
  icon: string;
  redirect: string;
  subOptions: SidebarSubOptions[];
}

interface SidebarSubOptions {
  name: string;
  redirect: string;
}
