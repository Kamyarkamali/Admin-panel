import { FC } from "react";
import { datadashBoard } from "../data/LocalData";

//icons
import { IoCloseOutline } from "react-icons/io5";

//interfaces
import { IopenMenu } from "../types/interface";

const HamburgerMenu: FC<IopenMenu> = ({ hamburger, setHamburger }) => {
  console.log({ hamburger, setHamburger });

  return (
    <div className="transition-all w-[280px] relative duration-300  ease-in  h-fit bg-[#F8F8F8] shadow-lg  shadow-gray-400">
      <div className="flex flex-col items-end cursor-pointer p-4">
        <IoCloseOutline
          size={25}
          onClick={() => setHamburger(false)}
          color="white"
          className="border-[1px] rounded-full bg-blue-400 hover:opacity-50 duration-150"
        />
      </div>
      <div>
        <ul className="flex flex-col">
          {datadashBoard.map((item) => (
            <div key={item.id}>
              <div className={"flex gap-2 items-center justify-start mt-5"}>
                <li className="mr-4">{item.icon}</li>
                <div className="flex items-center p-2 text-gray-500 cursor-pointer rounded-lg hover:text-white hover:bg-blue-600 duration-300 justify-between w-full">
                  <li className="text-[12px] mr-3  duration-300 font-bold">
                    {item.title}
                  </li>
                  <li>{item.arrow}</li>
                </div>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
