import { FC } from "react";
import { dataSlider } from "../data/LocalData";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Slider: FC = () => {
  return (
    <div className="max-w-[1200px] lg:w-[450px] md:w-[740px] sm:w-[610px] w-[404px] mx-auto  bg-[#7367F0] shadow-md  h-[250px] p-3 rounded-lg flex ">
      <Swiper
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
        className="flex items-center justify-between"
      >
        {dataSlider.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-between items-center"
          >
            <div className="flex flex-col justify-around gap-3 text-white">
              <h2 className="text-[18px] font-bold">{item.title}</h2>
              <p className="text-sm">نرخ تبدیل کل 28.50%</p>
              {item.name === "ترافیک" ? (
                <p>ترافیک</p>
              ) : item.name === "آمار فروش" ? (
                <p>آمار فروش</p>
              ) : item.name === "منابع درآمد" ? (
                <p>منابع درآمد</p>
              ) : item.name === "ترافیک" ? (
                <p>ترافیک</p>
              ) : null}

              <div className="grid grid-cols-2 gap-8">
                {item.name === "ترافیک" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.viesitYekta}
                    </p>{" "}
                    <p className="text-sm">بازدید یکتا</p>
                  </div>
                ) : null}
                {item.name === "ترافیک" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.nerkh}
                    </p>{" "}
                    <p className="text-sm">بازدید صفحات</p>
                  </div>
                ) : null}

                {item.name === "ترافیک" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.userYekta}
                    </p>{" "}
                    <p className="text-sm">کاربر یکتا</p>
                  </div>
                ) : null}

                {item.name === "ترافیک" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.nerkh}
                    </p>{" "}
                    <p className="text-sm">نرخ تبدیل</p>
                  </div>
                ) : null}

                {item.name === "آمار فروش" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.sod}
                    </p>{" "}
                    <p className="text-sm">سود</p>
                  </div>
                ) : null}

                {item.name === "آمار فروش" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.orderNumber}K
                    </p>{" "}
                    <p className="text-sm">تعداد سفارشات</p>
                  </div>
                ) : null}
                {item.name === "آمار فروش" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.orderNumber}K
                    </p>{" "}
                    <p className="text-sm"> سفارشات</p>
                  </div>
                ) : null}

                {item.name === "آمار فروش" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.items}K
                    </p>{" "}
                    <p className="text-sm">آیتم ها</p>
                  </div>
                ) : null}

                {item.name === "منابع درآمد" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.mostaghim}h
                    </p>{" "}
                    <p className="text-sm">آیتم ها</p>
                  </div>
                ) : null}

                {item.name === "منابع درآمد" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      18
                    </p>{" "}
                    <p className="text-sm">تعداد سفارشات</p>
                  </div>
                ) : null}

                {item.name === "منابع درآمد" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.khadamat}K
                    </p>{" "}
                    <p className="text-sm"> سفارشات</p>
                  </div>
                ) : null}

                {item.name === "منابع درآمد" ? (
                  <div className="flex items-center gap-3">
                    <p className="bg-blue-700 p-1 rounded-lg text-sm w-[50px] h-[30px] flex justify-center items-center">
                      {item.mostaghim}K
                    </p>{" "}
                    <p className="text-sm">تعداد سفارشات</p>
                  </div>
                ) : null}
              </div>
            </div>
            <img className="w-[130px]" src={item.image} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
