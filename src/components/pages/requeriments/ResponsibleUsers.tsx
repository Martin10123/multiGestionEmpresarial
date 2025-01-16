import { avatar } from "@/images";

export const ResponsibleUsers = () => {
  return (
    <div className="w-full flex flex-col gap-6 border-b border-tertiary pb-4 my-6 md1:flex-row md1:items-start">
      <div className="w-full grid gap-2">
        <h3 className="text-lg font-semibold text-gray-800">Creado por:</h3>

        <div className="">
          <div className="">
            <img
              className="size-11 mb-3 rounded-full shadow-lg"
              src={avatar}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-black">
              Martin Elias
            </h5>
            <p className="text-sm text-quinary">Visual Designer</p>
            <p className="text-sm text-quinary">Martin@gmail.com</p>
            <p className="text-sm text-quinary">300 123 4567</p>
          </div>
        </div>
      </div>

      <div className="w-full grid gap-2">
        <h3 className="text-lg font-semibold text-gray-800">Asignado a</h3>

        <div className="w-full max-w-sm flex flex-wrap gap-x-8 gap-y-4">
          <div className="">
            <img
              className="size-11 mb-3 rounded-full shadow-lg"
              src={avatar}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-black">
              Martin Elias
            </h5>
            <p className="text-sm text-quinary">Visual Designer</p>
            <p className="text-sm text-quinary">Martin@gmail.com</p>
            <p className="text-sm text-quinary">300 123 4567</p>
          </div>
          <div className="">
            <img
              className="size-11 mb-3 rounded-full shadow-lg"
              src={avatar}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-black">
              Martin Elias
            </h5>
            <p className="text-sm text-quinary">Visual Designer</p>
            <p className="text-sm text-quinary">Martin@gmail.com</p>
            <p className="text-sm text-quinary">300 123 4567</p>
          </div>
          <div className="">
            <img
              className="size-11 mb-3 rounded-full shadow-lg"
              src={avatar}
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-black">
              Martin Elias
            </h5>
            <p className="text-sm text-quinary">Visual Designer</p>
            <p className="text-sm text-quinary">Martin@gmail.com</p>
            <p className="text-sm text-quinary">300 123 4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};
