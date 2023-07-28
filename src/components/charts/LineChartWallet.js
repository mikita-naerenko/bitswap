import { LineChart } from '@mui/x-charts/LineChart';


const LineChartWallet = ({data, label}) => {
    return (
        <LineChart
          height={400}
          series={[{data: data.data, label: label}]}
          xAxis={[{ scaleType: 'point', data:  data.time,}]}
          sx={{
            ' .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel': {
              transform: 'rotate(50deg) translateX(20px)',
            },
          }}
        />
      );


}

export default LineChartWallet;