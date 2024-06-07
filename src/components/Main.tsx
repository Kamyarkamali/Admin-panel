import { FC } from "react";
import Slider from "./Slider";
import Sales from "./Sales";
import PriceCharts from "./PriceCharts";

const Main: FC = () => {
  return (
    <div className="mt-[8rem] mr-9 max-w-[1200px] mx-auto">
      <div className="flex justify-between items-center lg:flex-row flex-col gap-4">
        <div>
          <Slider />
        </div>

        <div>
          <Sales />
        </div>

        <div className="flex justify-center">
          <PriceCharts />
        </div>
      </div>
    </div>
  );
};

export default Main;
