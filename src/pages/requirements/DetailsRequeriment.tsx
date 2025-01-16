import { HomeTemplate } from "@/templates/HomeTemplate";
import { LineTimeActivity } from "@/components/pages/requeriments/LineTimeActivity";
import { ResponsibleUsers } from "@/components/pages/requeriments/ResponsibleUsers";

export const DetailsRequeriment = () => {
  return (
    <HomeTemplate>
      <section className="p-4 space-y-4 md1:space-y-0 md1:flex md1:gap-6 md1:p-8">
        <article className="md1:grid md1:gap-6 md1:border md1:border-tertiary md1:rounded-lg md1:p-4 md1:max-w-[50%]">
          <div className="grid gap-6 border-b border-tertiary pb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Detalle del requerimiento
            </h2>

            <div className="grid grid-cols-2 gap-x-4 gap-y-4">
              <p className="font-semibold text-black">
                <span className="font-semibold text-quinary block mb-1">
                  Fecha de creación: <br />
                </span>
                2021-09-01
              </p>
              <p className="font-semibold text-black flex flex-col items-end">
                <span className="font-semibold text-quinary block mb-1">
                  Fecha limite: <br />
                </span>
                2021-09-08
              </p>

              <p className="font-semibold text-black">
                <span className="font-semibold text-quinary block mb-1">
                  Tipo requerimiento: <br />
                </span>
                Hardware
              </p>

              <p className="font-semibold text-black flex flex-col items-end">
                <span className="font-semibold text-quinary block mb-1">
                  Precio estimado: <br />
                </span>
                $ 100.000.000
              </p>
            </div>
          </div>

          <div className="pt-4 border-b border-tertiary pb-4">
            <div className="grid gap-2">
              <h3 className="text-lg font-semibold text-gray-800">
                Descripción
              </h3>
              <p className="text-base text-quinary text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed
                nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis
                ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
                inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
                sit amet, consectetur adipiscing elit.
                <br />
                <br /> Integer nec odio. Praesent libero. Sed cursus ante
                dapibus diam. Sed nisi. Nulla quis sem at nibh elementum
                imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec
                tellus sed augue semper porta. Mauris massa. Vestibulum lacinia
                arcu eget nulla. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit. Integer nec odio.
                <br />
                <br /> Duis sagittis ipsum. Praesent mauris. Fusce nec tellus
                sed augue semper porta. Mauris massa. Vestibulum lacinia arcu
                eget nulla. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Integer nec odio. Praesent
                Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu
                ad litora torquent per conubia nostra, per inceptos himenaeos.
              </p>
            </div>

            <ul className="grid grid-cols-3 gap-4 mt-8">
              <li className="grid gap-1">
                <h3 className="text-base font-semibold text-black">
                  Prioridad
                </h3>
                <p className="text-sm text-gray-600">Alta</p>
              </li>
              <li className="grid gap-1 justify-items-center">
                <h3 className="text-base font-semibold text-black">
                  Categoría
                </h3>
                <p className="text-sm text-gray-600">Hardware</p>
              </li>
              <li className="grid gap-1 justify-items-end">
                <h3 className="text-base font-semibold text-black">Estado</h3>
                <p className="text-sm text-gray-600">Pendiente</p>
              </li>
            </ul>
          </div>

          <ResponsibleUsers />
        </article>

        <article className="md1:grid md1:gap-6 md1:border md1:border-tertiary md1:rounded-lg md1:p-4 md1:max-w-[50%] md1:h-max">
          <LineTimeActivity />

          <div className="mt-4 p-4 border border-tertiary rounded-lg md1:mt-0">
            <h3 className="text-lg font-semibold text-gray-800">
              Estado del requerimiento
            </h3>

            <div className="grid mt-4">
              <div className="w-full h-2 bg-quaternary rounded-full overflow-hidden">
                <div className="w-[20%] h-full bg-quinary rounded-full"></div>
              </div>

              <div className="grid grid-cols-4 gap-2 mt-4">
                <p className="text-sm text-center">Pendiente</p>
                <p className="text-sm text-center">En espera</p>
                <p className="text-sm text-center">En proceso</p>
                <p className="text-sm text-center">Terminado</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </HomeTemplate>
  );
};
