import { FC } from "react";

import image from "../assets/images/1.png";

//icons
import { LuUserCheck2 } from "react-icons/lu";
import { RiSettings2Line } from "react-icons/ri";
import { MdAddCard } from "react-icons/md";
import { BsQuestionLg } from "react-icons/bs";
import { MdOutlinePriceCheck } from "react-icons/md";
import { RxExit } from "react-icons/rx";

const UserProfile: FC = () => {
  return (
    <div className="bg-white w-[230px] shadow-lg rounded-lg p-3 h-fit">
      <div>
        <div className="flex gap-2 text-[13px] text-gray-600 border-b-[1px] p-2 border-gray-300">
          <img className="w-[40px] rounded-[100%]" src={image} alt="/" />
          <div className="flex flex-col">
            <span>محمد نجفی</span>
            <span className="text-gray-800 font-bold">مدیر کل</span>
          </div>
        </div>

        <div className="flex hover:bg-gray-200 duration-200 rounded-lg mt-3 hover:text-blue-500 items-center font-bold  gap-2 text-[13px] text-gray-500 border-b-[1px] p-2 border-gray-300">
          <LuUserCheck2 size={25} />
          <span>پروفایل من</span>
        </div>

        <div className="flex hover:bg-gray-200 duration-200 rounded-lg mt-3 hover:text-blue-500 items-center font-bold  gap-2 text-[13px] text-gray-500 border-b-[1px] p-2 border-gray-300">
          <RiSettings2Line size={25} />
          <span>تنظیمات</span>
        </div>

        <div className="flex hover:bg-gray-200 duration-200 rounded-lg mt-3 hover:text-blue-500 items-center font-bold  gap-2 text-[13px] text-gray-500 border-b-[1px] p-2 border-gray-300">
          <MdAddCard size={25} />
          <div className="flex justify-between w-full">
            <span>خرید ها</span>
            <span className="border-[1px] w-[20px] flex flex-col items-center bg-gray-200 rounded-full text-sm justify-center">
              3
            </span>
          </div>
        </div>

        <div className="flex flex-col items-start  duration-200 rounded-lg mt-3 font-bold  gap-2 text-[13px] text-gray-500 border-b-[1px] p-2 border-gray-300">
          <div className="flex gap-1 items-center hover:text-blue-500 hover:bg-gray-200 w-full p-2 rounded-lg duration-200">
            <BsQuestionLg size={20} />
            <span>سوالات</span>
          </div>
          <div className="flex gap-1 items-center hover:text-blue-500 hover:bg-gray-200 w-full p-2 rounded-lg duration-200">
            <MdOutlinePriceCheck size={23} />
            <span>قیمت گذاری</span>
          </div>
        </div>

        <div className="flex hover:bg-gray-200 duration-200 rounded-lg mt-3 hover:text-blue-500 items-center font-bold  gap-2 text-[13px] text-gray-500 border-b-[1px] p-2 border-gray-300">
          <RxExit size={17} />
          <span>خروج از حساب</span>
        </div>

        {/* <div>center</div> */}
        {/* <div>left</div> */}
      </div>
    </div>
  );
};

export default UserProfile;