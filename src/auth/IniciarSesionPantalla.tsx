import { logoEmpresa } from "../images";

export const IniciarSesionPantalla = () => {
  return (
    <section className="w-full p-4 flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:h-screen before:content before:w-full before:h-screen before:fixed before:top-0 before:left-0 before:bg-custom-gradient before:-z-50 xl:w-[80%] xl:mx-auto">
      <div className="w-full flex flex-col items-center gap-6 lg:gap-8">
        <figure>
          <img
            className="size-20 rounded-full object-cover lg:size-40"
            src={logoEmpresa}
            alt="Logo empresa"
          />
        </figure>

        <form
          action=""
          className="w-full bg-[#ffffffa3] p-4 rounded-lg shadow-md grid gap-4 md:max-w-[35rem] lg:min-w-max xl:max-w-[70%] lg:mx-auto"
        >
          <h2 className="text-4xl font-semibold text-black mt-5 lg:mt-2">
            Iniciar Sesión
          </h2>

          <div>
            <label
              htmlFor="Correo"
              className="block mb-2 text-sm w-max font-medium text-black lg:text-base"
            >
              Correo
            </label>
            <input
              type="email"
              id="Correo"
              className="border border-gray-300 text-black text-sm rounded-lg block w-full py-3.5 px-2.5 focus:bg-gray-100"
              placeholder="Correo..."
              required
            />
          </div>
          <div>
            <label
              htmlFor="Contrasena"
              className="block mb-2 text-sm w-max font-medium text-black lg:text-base"
            >
              Contraseña
            </label>
            <input
              type="password"
              id="Contrasena"
              className="border border-gray-300 text-black text-sm rounded-lg block w-full py-3.5 px-2.5 focus:bg-gray-100"
              placeholder="Contraseña..."
              required
            />
          </div>

          <div className="flex justify-between gap-4">
            <div className="w-full flex items-center gap-2">
              <input
                className="size-4"
                type="checkbox"
                name=""
                id="recordarme"
              />
              <label
                className="text-gray-500 text-sm font-medium"
                htmlFor="recordarme"
              >
                Recordar mi cuenta
              </label>
            </div>

            <div>
              <button className="text-tertiary font-medium hover:underline">
                <p className="md:w-max">Olvidaste tu contraseña?</p>
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="bg-tertiary text-white text-sm font-medium rounded-lg w-full py-3.5 hover:bg-teal-900 duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>

      <figure className="hidden w-full lg:flex lg:items-center lg:justify-center">
        <img
          className="w-full lg:max-w-[70%] h-auto object-cover"
          src="./assets/iniciarSesion.svg"
          alt="EnviApp Login"
        />
      </figure>
    </section>
  );
};
