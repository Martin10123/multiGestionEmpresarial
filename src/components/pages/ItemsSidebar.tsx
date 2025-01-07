import { SidebarOpciones } from "../../interfaces/data/SidebarInterfaces";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { IoIosArrowDown } from "react-icons/io";

interface Props {
  expanded: string | null;
  handleToggle: (nombre: string) => void;
  opcion: SidebarOpciones;
  expandedSidebar: boolean;
}

export const ItemsSidebar = ({
  opcion,
  expanded,
  handleToggle,
  expandedSidebar,
}: Props) => {
  const nodeRef = useRef(null);

  return (
    <li
      key={opcion.nombre}
      className={`bg-[#ffffff24] py-4 px-2 rounded-lg cursor-pointer duration-300 md1:py-3 md1:${
        expandedSidebar ? "w-full" : "w-max"
      } md1:px-0 md1:group`}
      onClick={() => handleToggle(opcion.nombre)}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4 px-2.5 text-sm font-semibold md1:text-base">
          <img className="size-6" src={opcion.icono} alt={opcion.nombre} />
          <p
            className={`w-full sm:max-w-[125px] xl:max-w-full truncate ${
              expanded === opcion.nombre ? "text-secondary" : "text-white"
            } ${expandedSidebar ? "block" : "md1:hidden"}`}
          >
            {opcion.nombre}
          </p>
        </div>

        {opcion.subOpciones.length > 0 && (
          <IoIosArrowDown
            className={`size-7 text-white pr-2.5 ${
              expandedSidebar ? "block" : "md1:hidden"
            }`}
          />
        )}
      </div>
      <CSSTransition
        in={expanded === opcion.nombre}
        timeout={300}
        classNames="submenu"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <ul ref={nodeRef} className="pl-10 mt-4 text-sm grid gap-2">
          {opcion.subOpciones.map((subOpcion) => (
            <li
              key={subOpcion.nombre}
              className="py-3 px-2.5 bg-[#ffffff09] rounded-lg hover:bg-white hover:bg-opacity-10 duration-150 truncate"
            >
              {subOpcion.nombre}
            </li>
          ))}
        </ul>
      </CSSTransition>
    </li>
  );
};
