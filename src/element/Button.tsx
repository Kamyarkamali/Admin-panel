import { FC } from "react";
import { IoMdSettings } from "react-icons/io";
import { Isetting } from "../types/interface";

const Button: FC<Isetting> = ({ setMenuSetting }) => {
  return (
    <div>
      <button
        onClick={() => setMenuSetting((prev) => !prev)}
        className="bg-blue-600 p-1 w-[50px] rounded-[6px] flex justify-center"
      >
        <IoMdSettings size={26} color="white" />
      </button>
    </div>
  );
};

export default Button;
