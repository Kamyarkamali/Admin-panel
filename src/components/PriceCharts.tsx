import { Typography } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

function GridDemo() {
  return (
    <div className="shadow-md w-[400px] flex flex-col items-center bg-[#ffff] dark:bg-slate-800 transition-all duration-200  ease-in rounded-lg dark:shadow-slate-900">
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
        width={400}
        margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
        grid={{ vertical: true, horizontal: true }}
      />
    </div>
  );
}

export default GridDemo;
