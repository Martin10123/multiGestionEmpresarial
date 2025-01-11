import { ReactNode, useState } from "react";
import { HeaderInicio } from "../components/pages/HeaderInicio";
import { SidebarInicio } from "../components/pages/SidebarInicio";

interface InicioTemplateProps {
  children: ReactNode | ReactNode[];
}

export const InicioTemplate = ({ children }: InicioTemplateProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <HeaderInicio handleToggleSidebar={handleToggleSidebar} />

      <main className="md1:flex before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:bg-custom-gradient before:-z-50">
        <SidebarInicio
          openSidebar={openSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />

        {children}
      </main>
    </>
  );
};
