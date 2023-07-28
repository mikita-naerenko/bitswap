import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@mui/material';
  import dynamic from "next/dynamic";
  import DynamicColorArrow from '../DynamicColorArrow';
  const PieChartWallet = dynamic(() => import('../charts/PieChartWallet'), {ssr:false});
 


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
                     alignItems="center"
                     sx={{
                        

                     }}>
                    <Typography>Total capitalization of your assets in USD:</Typography>
                    <Typography variant="h6" sx={{ml:1}}>{total.toFixed(2)}$</Typography><DynamicColorArrow value={total}/>
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