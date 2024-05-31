import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Main from "../components/Main";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/hello" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
