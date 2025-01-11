import { ReactNode, useState } from "react";
import { HeaderHome } from "../components/pages/HeaderHome";
import { SidebarHome } from "../components/pages/SidebarHome";

interface HomeTemplateProps {
  children: ReactNode | ReactNode[];
}

export const HomeTemplate = ({ children }: HomeTemplateProps) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <>
      <HeaderHome handleToggleSidebar={handleToggleSidebar} />

      <main className="md1:flex before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:bg-custom-gradient before:-z-50">
        <SidebarHome
          openSidebar={openSidebar}
          handleToggleSidebar={handleToggleSidebar}
        />

        {children}
      </main>
    </>
  );
};
