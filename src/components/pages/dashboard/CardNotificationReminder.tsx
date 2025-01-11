import { avatar } from "@/images";
import { IoCheckmarkDoneSharp, IoLockOpenOutline } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";

export const CardNotificationReminder = () => {
  return (
    <div className="flex items-start gap-2 border-b border-quaternary py-2 rounded-md">
      <img
        className="w-12 h-12 rounded-full aspect-square"
        src={avatar}
        alt="avatar"
      />

      <div className="w-full">
        <div className="flex flex-col gap-1">
          <p className="font-semibold text-black">Martin Elias</p>
          <p className="text-gray-700">
            Recordar enviar el informe de ventas a las 3:00 PM
          </p>
        </div>

        <div className="flex items-center justify-between mt-2">
          <p className="text-gray-700 text-sm">Hace 2 horas</p>

          <div className="flex gap-2 mt-2">
            <button className="cursor-pointer">
              <IoCheckmarkDoneSharp />
            </button>
            <button className="cursor-pointer">
              <RiDeleteBinLine />
            </button>
            <button className="cursor-pointer">
              <IoLockOpenOutline />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
