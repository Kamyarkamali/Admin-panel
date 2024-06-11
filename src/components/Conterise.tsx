import { FC, useContext } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { conterys } from "../data/LocalData";
import { Context } from "../context/ContextProvider";

const Conterise: FC = () => {
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`lg:w-[400px] w-[430px] h-[530px] dark:bg-slate-800 dark:shadow-gray-900 dark:text-white bg-[#FFFF] ${
        shadow && "shadow-md"
      } transition-all duration-200 ease-in shadow-gray-300 rounded-lg`}
    >
      <div className="mt-3 mr-4 flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <span className="text-md font-bold text-gray-500">
            فروش بر اساس کشور
          </span>
          <span className="opacity-65  text-[13px]">آمار فروش ماهانه</span>
        </div>
        <CiMenuKebab size={22} color="gray" className="cursor-pointer" />
      </div>

      <div className="mr-4 mt-3">
        <div>
          {conterys.map((item) => (
            <div className="flex items-center gap-3 mb-4" key={item.id}>
              <img
                className="w-[50px] h-[50px] rounded-[100%] object-cover"
                src={item.image}
                alt=""
              />

              <div className="flex items-center justify-between w-full">
                <div className="flex flex-col">
                  <span className="font-bold lg:text-md text-[12px]">
                    {item.price} تومان
                  </span>
                  <span className="text-sm opacity-80">{item.name}</span>
                </div>

                <div className="flex gap-2 items-center ml-4">
                  {item.darsad >= "12" ? (
                    <span className="text-gray-500">{item.icon}</span>
                  ) : (
                    <span className="rotate-180">{item.icon}</span>
                  )}
                  {item.darsad >= "12" ? (
                    <span className="text-green-500 lg:text-md text-[12px]">
                      {item.darsad}
                    </span>
                  ) : (
                    <span className="text-red-600 lg:text-md text-[12px]">
                      {item.darsad}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Conterise;
