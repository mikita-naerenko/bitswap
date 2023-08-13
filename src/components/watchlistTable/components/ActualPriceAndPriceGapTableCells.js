import TableCell from '@mui/material/TableCell';
import { useState } from 'react';
import { useWebSocketSingleCoinPriceListener } from '../../../services/WebSocket';






const ActualPriceAndPriceGapTableCells = ({coinId, desiredPrice}) => {
    const [ actualPrice, setActualPrice ] = useState('')
    
    useWebSocketSingleCoinPriceListener(coinId,setActualPrice)
    const priceGap = (Number(actualPrice) - Number(desiredPrice)).toFixed(2);

    console.log(coinId);

    return (
        <>
        <TableCell align="right">
            ${actualPrice}      
        </TableCell>
        <TableCell align="right">
            ${priceGap}
        </TableCell>
        </>
    )

}

export default ActualPriceAndPriceGapTableCells;