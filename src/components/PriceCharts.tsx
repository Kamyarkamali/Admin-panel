import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { useContext } from "react";
import { Context } from "../context/ContextProvider";

function GridDemo() {
  /* @ts-ignore */
  const { shadow } = useContext(Context);

  return (
    <div
      className={`${
        shadow && "shadow-md"
      } w-[400px] flex flex-col items-center bg-[#ffff] dark:bg-slate-800 transition-all duration-200  ease-in rounded-lg dark:shadow-slate-900 lg:w-[360px]  md:w-[740px] sm:w-[610px]`}
    >
      <Typography variant="h6" color={"blue"}>
        در آمد سیستم
      </Typography>
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        height={210}
        width={373}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}

export default GridDemo;
