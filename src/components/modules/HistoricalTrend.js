import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@mui/material';
  import ButtonGroup from '@mui/material/ButtonGroup';
  import CircularProgress from '@mui/material/CircularProgress';
  import dynamic from "next/dynamic";
  import {  useGetCryptoHistoryQuery } from '../api';
  import { useEffect, useState, useMemo } from 'react'; 
  const LineChartWallet = dynamic(() => import('../charts/LineChartWallet'), {ssr:false});

  const buttonsIntervalData = [
    {id: 'm1', textContent: '24H'},
    {id: 'h1', textContent: '30D'},
    {id: 'h6', textContent: '6M'},
    {id: 'd1', textContent: '12M'},
    
]

const HistoricalTrend = ({wallet}) => {
    console.log('render');
    // m1 - 24h interval 1m
    // h1 - 1 month interval 1h
    // h6 - 6 month interval 6h
    // h12 - 1 year interval 12h
    // d1 - 1 year interval 1d
    const idForFirstRequest = wallet.idToRequest[0];
    const intervalForFirstRequest = 'm1';
    const [interval, setInterval] = useState(intervalForFirstRequest);
    const [idForRequest, setIdForRequest] = useState(idForFirstRequest);
    const [request, setRequest] = useState({id: idForRequest, interval: interval});
    const [labeForLineChart, setLabelForLineChart] = useState(idForFirstRequest);
    const [activeButtonCoin, setActiveButtonCoin] = useState(idForFirstRequest);
    const [activeButtonInterval, setActiveButtonInterval] = useState(intervalForFirstRequest);

    const  handleClickCoinsList = (id) => {
        setIdForRequest(id)
        setActiveButtonCoin(id)
        setLabelForLineChart(id);
    }
    const handleClickIntervalsList = (id) => {  
        setActiveButtonInterval(id);
        setInterval(id);
    }

    useEffect(() => {
        setRequest({ id: idForRequest, interval: interval });
      }, [interval, idForRequest]);


      const renderButtonsCoinsList = (list) => {

        const buttonsList = list.map((item,i) => {
            return <Button key={item} 
                           id={wallet.idToRequest[i]}
                           onClick={(event) => handleClickCoinsList(event.target.id, interval)}
                           style={{
                            backgroundColor: activeButtonCoin === wallet.idToRequest[i] ? '#1976d2' : 'transparent',
                            color: activeButtonCoin === wallet.idToRequest[i] ? '#fff' : '#000',
                          }}
                           >
                            {item}
                    </Button>
        })
        return (
            <Box sx={{mb: 1}}>
                <Typography>Select coin from your wallet:</Typography>
                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                {buttonsList}
            </ButtonGroup>
            </Box>
            
        )
    }

    const renderButtonsIntervalList = (list) => {
        const buttonsList = list.map((item) => {
            return <Button key={item.id} 
                           id={item.id}
                           onClick={(event) => handleClickIntervalsList(event.target.id, interval)}
                           style={{
                            backgroundColor: activeButtonInterval === item.id ? '#1976d2' : 'transparent',
                            color: activeButtonInterval === item.id ? '#fff' : '#000',
                          }}
                           >
                            {item.textContent}
                    </Button>
        })
        return (
            <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                {buttonsList}
            </ButtonGroup>
        )
    }


    const {
        // Fetch history for selected coin
        data: historyData,
        isLoading: historyIsLoading,
        isError: historyIsError,
      } = useGetCryptoHistoryQuery(request);

      




    const dataHandler = (data, interval) => {
        const hdata = data.data.map((item) => ({
          priceUsd: Number(item.priceUsd),
          time: new Date(item.time),
        }));
      
        const intervalConfigs = {
          m1: { chunkSize: 60, timeFormat: { hour: '2-digit', minute: '2-digit' } },
          h1: { chunkSize: 24, timeFormat: { month: 'short', day: '2-digit' } },
        //   h6 config has the issue, chart's size doesn't allow to display all data. Over 30 elements is collapsing
          h6: { chunkSize: 30, timeFormat: { month: 'short', day: '2-digit' } },
          d1: { chunkSize: 30, timeFormat: { year: 'numeric', month: 'short' } },
        };
      
        const config = intervalConfigs[interval];
        if (!config) {
          throw new Error('Invalid interval');
        }
      
        const result = { data: [], time: [] };
        for (let i = 0; i < hdata.length; i += config.chunkSize) {
          const chunk = hdata.slice(i, i + config.chunkSize);
          const averageValue = chunk.reduce((acc, cur, i, arr) => {
            acc += cur.priceUsd
            if (i === arr.length -1) {
                return acc / arr.length
            }
            return acc;
        }, 0);

          result.data.push(averageValue);
          result.time.push(chunk[0].time.toLocaleString('en-US', config.timeFormat));
        }
      
        return result;
      };
      const memoDataHandler = useMemo(() =>{
        if (historyData) {
            return dataHandler(historyData,interval)
        }
         
        }, [historyData, interval]);


    return (
        <Card>
                <CardHeader
                    
                    title="Historical trend"
                    sx={{ textAlign: 'center' }}
                />
                <Box display='flex'
                     justifyContent="center"
                     alignItems="center"
                     flexDirection="column"
                     >
                        {renderButtonsCoinsList(wallet.coinsList.map(coin => coin.label))}
                        {renderButtonsIntervalList(buttonsIntervalData)}
                </Box>
                <CardContent>
                    <Box>
                        {historyIsLoading && <CircularProgress/>}
                        {historyIsError && <Typography>Ooops, somthing went wrong. Try later..</Typography>}
                        {historyData ? <LineChartWallet data={memoDataHandler} label={labeForLineChart}/> : null}
                    </Box>
                </CardContent>
            </Card>
    )
}

export default HistoricalTrend;