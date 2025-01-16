export const ListPriorityForm = () => {
  return (
    <div>
      <label className="block text-base font-medium text-black mb-2">
        Prioridad:
      </label>
      <ul className="flex flex-col sm:flex-row">
        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
          <div className="relative flex items-start w-full">
            <div className="flex items-center h-5">
              <input
                id="hs-horizontal-list-group-item-radio-1"
                name="hs-horizontal-list-group-item-radio"
                type="radio"
                className="border-gray-200 rounded-full disabled:opacity-50"
              />
            </div>
            <label
              htmlFor="hs-horizontal-list-group-item-radio-1"
              className="ms-3 block w-full text-sm text-black"
            >
              Prioridad alta
            </label>
          </div>
        </li>

        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
          <div className="relative flex items-start w-full">
            <div className="flex items-center h-5">
              <input
                id="hs-horizontal-list-group-item-radio-2"
                name="hs-horizontal-list-group-item-radio"
                type="radio"
                className="border-gray-200 rounded-full disabled:opacity-50"
              />
            </div>
            <label
              htmlFor="hs-horizontal-list-group-item-radio-2"
              className="ms-3 block w-full text-sm text-black"
            >
              Prioridad media
            </label>
          </div>
        </li>

        <li className="inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg w-full">
          <div className="relative flex items-start w-full">
            <div className="flex items-center h-5">
              <input
                id="hs-horizontal-list-group-item-radio-3"
                name="hs-horizontal-list-group-item-radio"
                type="radio"
                className="border-gray-200 rounded-full disabled:opacity-50"
              />
            </div>
            <label
              htmlFor="hs-horizontal-list-group-item-radio-3"
              className="ms-3 block w-full text-sm text-black"
            >
              Prioridad baja
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
