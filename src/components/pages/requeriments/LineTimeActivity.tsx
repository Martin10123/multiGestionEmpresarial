import { avatar } from "@/images";

export const LineTimeActivity = () => {
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-800">Actividad</h3>

      <div className="grid gap-6 mt-4">
        <div className="ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-quinary">
            1 Aug, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Mensaje 1
            </h3>
            <p className="mt-1 text-sm text-quinary">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vel
              tempore at non aliquam dolorum hic. Consequatur cupiditate
              dolorem, debitis porro incidunt nisi pariatur explicabo ut
              deserunt! Nostrum, quo ad.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-quinary hover:bg-quaternary focus:outline-none focus:bg-tertiary disabled:opacity-50 disabled:pointer-events-none"
            >
              <img
                className="shrink-0 size-4 rounded-full"
                src={avatar}
                alt="Avatar"
              />
              Martin Elias
            </button>
          </div>
        </div>

        <div className="ps-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-quinary">
            31 Jul, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-gray-800">
              Mensaje 2
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt vel
              tempore at non aliquam dolorum hic. Consequatur cupiditate
              dolorem, debitis porro incidunt nisi pariatur explicabo ut
              deserunt! Nostrum, quo ad.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-quinary hover:bg-quaternary focus:outline-none focus:bg-tertiary disabled:opacity-50 disabled:pointer-events-none"
            >
              <img
                className="shrink-0 size-4 rounded-full"
                src={avatar}
                alt="Avatar"
              />
              Martin Elias
            </button>
          </div>
        </div>

        <div className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300">
          <div className="ps-2 my-2">
            <h3 className="text-xs font-medium uppercase text-quinary">
              30 Jul, 2023
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
