import { useState } from "react";
import { HomeTemplate } from "../templates/HomeTemplate";

export const HomePage = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleToggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <HomeTemplate>
      <section className="pt-20 md:max-w-screen-md md:m-auto md1:p-0">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl">
            ¡Bienvenido sr/a. Martin Elias!, ¿Que deseas hacer hoy?
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-700 lg:text-xl sm:px-16">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            malesuada, justo ac eleifend lacinia, nunc libero ultricies purus,
            nec condimentum urna odio in justo.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button
              className="inline-flex justify-center shadow items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-quaternary hover:bg-opacity-50 focus:ring-4 focus:ring-blue-300"
              onClick={handleToggleSidebar}
            >
              Ver el menu
              <svg
                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
            <button className="inline-flex justify-center shadow items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-tertiary hover:bg-opacity-50 focus:ring-4 focus:ring-blue-300">
              Learn more
            </button>
          </div>
        </div>
      </section>
    </HomeTemplate>
  );
};
