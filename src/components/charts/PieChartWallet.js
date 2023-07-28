import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';
  
  export default function PieChartWallet({displayData}) {
    return (
        <>
      <PieChart
        series={[
          {
            data: displayData,
            innerRadius: 70,
            outerRadius: 100,
            cx: 116,
          }
        ]}
        height={300}
        sx={{
            "--ChartsLegend-rootOffsetX": "-44px",
            "--ChartsLegend-rootOffsetY": "-20px",
          }}
      />
      </>
    );
    
  }