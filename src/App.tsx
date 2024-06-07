import { Route, Routes } from "react-router-dom";
import "./App.css";

import Dahsboard from "./components/Dashboard";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";
import Main2 from "./components/Main2.tsx";

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
            <Route path="/hello" element={<Main />} />
          </Routes>
        </div>

        <div className="mt-9 mr-[3rem]">
          <Main2 />
        </div>
      </div>
    </div>
  );
}

export default App;
