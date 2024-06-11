import { FC } from "react";
import Conterise from "./Conterise";
import Sod from "./Sod";
import Views from "./Views";
import Tabalee from "./Tabale";

const Main3: FC = () => {
  return (
    <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 max-w-[1200px] mx-auto">
      <div className="ml-14 lg:ml-0 flex justify-center">
        <Conterise />
      </div>

      <div className="ml-14 lg:ml-0 flex justify-center">
        <Sod />
      </div>

      <div className="ml-14 lg:ml-0 flex justify-center">
        <Views />
      </div>
      <div>
        <Tabalee />
      </div>
    </div>
  );
};

export default Main3;
