import { IoHomeOutline } from "react-icons/io5";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiNewspaperClippingLight } from "react-icons/pi";
import { IoNewspaperOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMessageCircle } from "react-icons/fi";
import { BsCalendar2Date } from "react-icons/bs";
import { MdOutlineHowToReg } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import { FiBookOpen } from "react-icons/fi";
import { FiTruck } from "react-icons/fi";
import { BsCashCoin } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { MdOutlineContactPage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaRegAddressCard } from "react-icons/fa";
import { LuServer } from "react-icons/lu";
import { PiFolderSimpleUser } from "react-icons/pi";
import { TbMessageCircle2 } from "react-icons/tb";
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";
import { GrSystem } from "react-icons/gr";
import { MdOutlineLightMode } from "react-icons/md";
import { IoMoon } from "react-icons/io5";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { IoIosArrowUp } from "react-icons/io";

import image from "../assets/images/1.png";
import image2 from "../assets/images/2.png";
import image3 from "../assets/images/9.png";

import slider1 from "../assets/slider/1.png";
import slider2 from "../assets/slider/2.png";
import slider3 from "../assets/slider/3.png";

import contry1 from "../assets/conterys/2.png";
import contry2 from "../assets/conterys/6.png";
import contry3 from "../assets/conterys/3.png";
import contry4 from "../assets/conterys/5.png";
import contry5 from "../assets/conterys/1.png";
import contry6 from "../assets/conterys/4.webp";

import {
  Iconterys,
  ImenuDshboard,
  Inotif,
  Islider,
  Ithem,
  Itheme,
} from "../types/interface";

export const datadashBoard: ImenuDshboard[] = [
  {
    id: 1,
    title: "صفحات داشبوردها",
    icon: <IoHomeOutline size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 2,
    title: "طرح ها",
    icon: <PiNewspaperClippingLight size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 3,
    title: "صفحات سایت ها",
    icon: <IoNewspaperOutline size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 4,
    name: "برنامه ها و صفحات",
    title: "ایمیل",
    icon: <MdOutlineMailOutline size={20} color="gray" />,
  },
  {
    id: 5,
    name: "برنامه ها و صفحات",
    title: "پیام رسان",
    icon: <FiMessageCircle size={20} color="gray" />,
  },
  {
    id: 6,
    name: "برنامه ها و صفحات",
    title: "تقویم",
    icon: <BsCalendar2Date size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 7,
    name: "برنامه ها و صفحات",
    title: "گردشگر",
    icon: <MdOutlineHowToReg size={20} color="gray" />,
  },
  {
    id: 8,
    name: "برنامه ها و صفحات",
    title: "نجارت الکترونیک",
    icon: <CgShoppingCart size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 9,
    name: "برنامه ها و صفحات",
    title: "آکادمی",
    icon: <FiBookOpen size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 10,
    name: "برنامه ها و صفحات",
    title: "حمل و نقل",
    icon: <FiTruck size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 11,
    name: "برنامه ها و صفحات",
    title: "صورت حساب",
    icon: <BsCashCoin size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 12,
    name: "برنامه ها و صفحات",
    title: "سطح دسترسی",
    icon: <IoSettingsOutline size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 13,
    name: "برنامه ها و صفحات",
    title: "کاربران",
    icon: <LuUsers2 size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 14,
    name: "برنامه ها و صفحات",
    title: "صفحات",
    icon: <MdOutlineContactPage size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 15,
    name: "برنامه ها و صفحات",
    title: "احراز هویت",
    icon: <IoLockClosedOutline size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 16,
    name: "امکانات",
    title: "کارت ها",
    icon: <FaRegAddressCard size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 17,
    name: "امکانات",
    title: "رابطه کاربری",
    icon: <LuServer size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
  {
    id: 18,
    name: "امکانات",
    title: "طراحی سفارشی",
    icon: <PiFolderSimpleUser size={20} color="gray" />,
    arrow: <MdKeyboardArrowLeft />,
  },
];

export const notifdata: Inotif[] = [
  {
    id: 1,
    image: image,
    title: "تبریک به شما",
    desc: "نشان برتر فروشنده ماه رو گرفتید",
    date: "الان",
  },
  {
    id: 2,
    image: "ن م",
    title: "کوروش تهرانی",
    desc: "درخواست شما را پذیرفت.",
    date: "1 ساعت قبل",
  },
  {
    id: 3,
    image: "ن م",
    title: "کوروش تهرانی",
    desc: "درخواست شما را پذیرفت.",
    date: "1 ساعت قبل",
  },
  {
    id: 4,
    image: image2,
    title: "پیام جدید از بهاره",
    desc: "شما یک پیام جدید از بهاره دارید",
    date: "12 ساعت قبل",
    icon: <TbMessageCircle2 />,
  },
  {
    id: 5,
    image: image3,
    title: "اپلیکشن بروزرسانی شد",
    desc: "پروژه شما با موفقیت آپدیت شد",
    date: "دیروز",
  },
];

export const options: Ithem[] = [
  { icon: <CiLight size={20} color="gray" />, text: "light" },
  { icon: <CiDark size={20} color="gray" />, text: "dark" },
  { icon: <GrSystem size={20} color="gray" />, text: "system" },
];

export const themContext: Itheme[] = [
  { id: 1, title: "light", icon: <MdOutlineLightMode size={23} /> },
  { id: 2, title: "dark", icon: <IoMoon size={23} /> },
  {
    id: 3,
    title: "system",
    icon: <MdOutlineSystemUpdateAlt size={23} />,
  },
];

export const dataSlider: Islider[] = [
  {
    id: 1,
    image: slider1,
    title: "بررسی وبسایت",
    nerkh: "%28.5",
    name: "ترافیک",
    viesitYekta: "28%",
    userYekta: "1.2k",
    nerkhtabdil: "12%",
    viewNumbers: "3.1k",
  },
  {
    id: 2,
    image: slider2,
    title: "بررسی وبسایت",
    nerkh: "%28.5",
    name: "آمار فروش",
    sod: "28%",
    orders: 127,
    items: 2.3,
    orderNumber: 18,
  },
  {
    id: 3,
    image: slider3,
    title: "بررسی وبسایت",
    nerkh: "%28.5",
    name: "منابع درآمد",
    mostaghim: 238,
    khadamat: 890,
    items: 2.3,
    campine: 1.2,
  },
];

export const conterys: Iconterys[] = [
  {
    id: 1,
    image: contry1,
    name: "آمریکا",
    price: "8567K",
    darsad: "25%8",
    icon: <IoIosArrowUp />,
  },
  {
    id: 2,
    image: contry2,
    name: "برزیل",
    price: "8565K",
    darsad: "6.2%",
    icon: <IoIosArrowUp />,
  },
  {
    id: 3,
    image: contry3,
    name: "کانادا",
    price: "8565K",
    darsad: "12.4%",
    icon: <IoIosArrowUp />,
  },
  {
    id: 4,
    image: contry4,
    name: "انگلیس",
    price: "754",
    darsad: "11.9%",
    icon: <IoIosArrowUp />,
  },
  {
    id: 5,
    image: contry5,
    name: "ترکیه",
    price: "45",
    darsad: "16.2%",
    icon: <IoIosArrowUp />,
  },
  {
    id: 6,
    image: contry6,
    name: "ترکیه",
    price: "98",
    darsad: "14.8%",
    icon: <IoIosArrowUp />,
  },
];
