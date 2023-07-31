import {
    Box,
    Card,
    CardContent,
    CardHeader,
    Typography,
  } from '@mui/material';
  import CircularProgress from '@mui/material/CircularProgress';
  import dynamic from "next/dynamic";
  import {  useGetCryptoHistoryQuery } from '../../services/api';
  import { useEffect, useState, useMemo } from 'react'; 
  import { INTERVAL_CONFIGS, BUTTONS_INTERVAL_DATA } from './constants';
  import { dataHandler } from './helper';
  import ButtonIntervalList from './components/ButtonIntervalList';
  import ButtonsCoinsList from './components/ButtonCoinsList';
  const LineChartWallet = dynamic(() => import('./components/LineChartWallet'), {ssr:false});
 

const HistoricalTrend = ({wallet}) => {

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



    const {
        // Fetch history for selected coin
        data: historyData,
        isLoading: historyIsLoading,
        isError: historyIsError,
      } = useGetCryptoHistoryQuery(request);

      
      const memoDataHandler = useMemo(() =>{
        if (historyData) {
            return dataHandler(historyData,interval,INTERVAL_CONFIGS)
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
                        <ButtonsCoinsList handleClickCoinsList={handleClickCoinsList}
                                          wallet={wallet}
                                          interval={interval}
                                          activeButtonCoin={activeButtonCoin}
                        />
                        <ButtonIntervalList handleClickIntervalsList={handleClickIntervalsList}
                                            BUTTONS_INTERVAL_DATA={BUTTONS_INTERVAL_DATA}
                                            interval={interval}
                                            activeButtonInterval={activeButtonInterval}
                        />
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