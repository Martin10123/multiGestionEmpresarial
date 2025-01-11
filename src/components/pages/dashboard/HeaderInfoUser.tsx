import { currentDate } from "../../../helpers/currentDate";

export const HeaderInfoUser = () => {
  return (
    <div className="flex flex-col gap-2 md1:flex-row md1:items-start md1:justify-between">
      <div>
        <h2 className="text-2xl font-semibold text-black md1:text-4xl">
          Hola, Martin Elias
        </h2>

        <p className="text-gray-700 text-sm md1:text-base ">
          Bienvenido a tu panel de control, aquí podrás ver un resumen de tu
          información.
        </p>

        <div></div>
      </div>

      <div className="flex items-center justify-end gap-2">
        <p className="text-base text-gray-800 font-semibold">{currentDate()}</p>
        <div className="p-2 rounded-full bg-tertiary cursor-pointer hover:bg-quaternary">
          <svg
            className="size-6 text-black"
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
              d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};
