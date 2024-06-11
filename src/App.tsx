import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dahsboard from "./components/Dashboard";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Main2 from "./components/Main2.tsx";
import Main3 from "./components/Main3.tsx";

import { FaLinkedin } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

function App() {
  return (
    <div className="flex justify-center gap-3 dark:bg-slate-800 transition-all duration-200 ease-in">
      <div className="border">
        <Dahsboard />
      </div>

      <div className="basis-[90%] mt-3 mx-auto">
        <div>
          <Navbar />
        </div>
        <div className="content mt-9">
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </div>
        <div className="mt-9 mr-[3rem]">
          <Main2 />
        </div>
        <div className="mt-9 mr-[3rem]">
          <Main3 />
        </div>
        <footer className="lg:mr-[6rem] items-center flex flex-col gap-2 text-blue-500 mb-[3rem] mt-[1.3rem]">
          <span> کد نویسی و طراحی شده توسط کامیار کمالی</span>
          <div className="flex items-center justify-center w-[300px] gap-3">
            <a
              className="bg-blue-200 p-1 rounded-md"
              href="https://www.linkedin.com/in/kamyar-kamali-671a5822b/"
            >
              <FaLinkedin size={22} />
            </a>
            <a className="bg-green-300 p-1 rounded-md" href="tel:09190058102">
              <IoCallOutline size={22} />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
