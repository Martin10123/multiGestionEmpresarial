import { logoEmpresa } from "../../images";

interface HeaderHomeProps {
  handleToggleSidebar: () => void;
}

export const HeaderHome = ({ handleToggleSidebar }: HeaderHomeProps) => {
  return (
    <header className="p-3 bg-tertiary sticky top-0 z-[9999] md1:border-b md1:border-quaternary">
      <nav className="flex justify-between items-center">
        <figure>
          <img
            className="size-12 object-cover rounded-full cursor-pointer"
            src={logoEmpresa}
            alt="Logo empresa"
          />
        </figure>

        <div className="hidden w-2/5 md1:flex items-center">
          <div className="w-full min-w-[200px]">
            <div className="relative flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="absolute w-5 h-5 top-2.5 left-2.5 text-slate-600"
              >
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>

              <input
                className="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-quaternary rounded-md pl-10 pr-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Buscar en la plataforma..."
              />

              <button
                className="rounded-md bg-quaternary py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-opacity-50 focus:shadow-none active:bg-slate-700 hover:bg-opacity-50 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <ul className="flex items-center gap-2">
          <li className="p-2.5 bg-quaternary rounded-full cursor-pointer hover:bg-opacity-50 md1:hidden">
            <svg
              className="size-7 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </li>
          <li
            className="p-2.5 bg-quaternary rounded-full cursor-pointer hover:bg-opacity-50 md1:hidden"
            onClick={handleToggleSidebar}
          >
            <svg
              className="size-7 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 6h8m-8 4h12M6 14h8m-8 4h12"
              />
            </svg>
          </li>
          <li className="cursor-pointer">
            <figure>
              <img
                className="size-12 object-cover rounded-full"
                src="/assets/usuarioSinImagen.svg"
                alt="Logo empresa"
              />
            </figure>
          </li>
        </ul>
      </nav>
    </header>
  );
};
