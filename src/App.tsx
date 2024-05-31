import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dahsboard from "./components/Dashboard";
import Navbar from "./components/Navbar.tsx";
import Main from "./components/Main.tsx";

function App() {
  return (
    <div className="flex gap-3">
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
            <Route path="/hellos" element={<p>hello</p>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
