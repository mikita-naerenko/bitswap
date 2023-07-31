import {
    Box,
    Card,
    CardContent,
    CardHeader,
  } from '@mui/material';
  import Title from './components/Title';
  import dynamic from "next/dynamic";
  const PieChartWallet = dynamic(() => import('./components/PieChartWallet'), {ssr:false});
 


  const TotalWalletChart = ({wallet}) => {

    // Copy props object
    const displayData = JSON.parse(JSON.stringify(wallet.coinsList));
    const total = wallet.coinsList.reduce((acc,cur,i) => {
    // Compute total wallet's capitalization in USD
        const valueUsd = cur.valueCoin * Number(cur.priceUsd);
        displayData[i].value = valueUsd
        acc+=valueUsd
        return acc;
    },0)

    displayData.forEach(el => {
    // Compute percens of all wallet capitalization
        const percent = (el.value / total * 100).toFixed(2);
        el.label = el.label + ` ${percent}%`
    })
        return (
            <Card>
                <CardHeader
                    
                    title="Allocation"
                    sx={{ textAlign: 'center' }}
                />
                <Box display='flex'
                     justifyContent="center"
                     alignItems="center">
                        <Title total={total}/>
                </Box>
                <CardContent>
                    <Box>
                        <PieChartWallet displayData={displayData} total={total}/>
                        
                    </Box>
                </CardContent>
            </Card>
        )
  }

  export default TotalWalletChart;