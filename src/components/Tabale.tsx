import image1 from "../assets/coders/1.png";
import image2 from "../assets/coders/2.png";
import image3 from "../assets/coders/3.png";
import image5 from "../assets/coders/5.png";
import image6 from "../assets/coders/6.png";
import image7 from "../assets/coders/7.png";
import image8 from "../assets/coders/8.png";

const TableComponent = () => {
  return (
    <div className="mx-auto mt-8 px-4 max-w-[1200px] hidden xl:block">
      <div className="flex flex-col w-[1200px] mx-auto">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden shadow-md sm:rounded-lg">
              <table className="w-[1200px] mx-auto">
                <thead className="bg-gray-50 dark:bg-slate-800">
                  <tr>
                    <th
                      scope="col"
                      className="text-xs md:text-sm font-medium text-gray-900  dark:text-white px-9 py-4 text-right"
                    >
                      مدیر
                    </th>
                    <th
                      scope="col"
                      className="text-xs md:text-sm dark:text-white font-medium text-gray-900 px-4 py-4 text-right"
                    >
                      گروه
                    </th>
                    <th
                      scope="col"
                      className="text-xs md:text-sm dark:text-white font-medium text-gray-900 px-6 py-4 text-right"
                    >
                      پروژه‌ها
                    </th>
                    <th
                      scope="col"
                      className="text-xs dark:text-white md:text-sm font-medium text-gray-900 px-6 py-4 text-right"
                    >
                      وضعیت
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="dark:bg-slate-800 border-b">
                    <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      علی رضایی
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      <div className="flex justify-start gap-2">
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image1}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image2}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image3}
                          alt="/"
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500 dark:text-white">
                      پروژه فروشگاهی
                    </td>
                    <td className="px-6 py-4 dark:text-white whitespace-nowrap text-xs md:text-sm text-gray-500">
                      در حال انجام
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4 dark:text-white whitespace-nowrap text-xs md:text-sm font-medium text-gray-900">
                      مریم احمدی
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image3}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image5}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image6}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image7}
                          alt="/"
                        />
                        <img
                          className="w-[35px] hover:scale-105 duration-200 cursor-pointer rounded-[100%]"
                          src={image8}
                          alt="/"
                        />
                      </div>
                    </td>
                    <td className="px-6 dark:text-white py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      کد نویسی بک اند سایت فروشگاهی
                    </td>
                    <td className="px-6 dark:text-white py-4 whitespace-nowrap text-xs md:text-sm text-gray-500">
                      تکمیل شده
                    </td>
                  </tr>
                  {/* ردیف‌های بیشتر */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
