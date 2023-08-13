




import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import RemoveFromWatchListButton from './RemoveFromWatchListButton';
import ActualPriceAndPriceGapTableCells from './ActualPriceAndPriceGapTableCells';
import DoneIcon from '@mui/icons-material/Done';
import CancelIcon from '@mui/icons-material/Cancel';





const WatchListTableBody = ({data}) => {

    return (
        <TableBody>
            {data.map((row) => (
                <TableRow
                    key={row.key}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.name}
                        <RemoveFromWatchListButton data={row}/>
                    </TableCell>
                    <TableCell align="right">{row.desiredPrice}</TableCell>
                    <ActualPriceAndPriceGapTableCells coinId={row.id} desiredPrice={row.desiredPrice}/>
                    <TableCell align="right">${Number(row.priceOnsubscription).toFixed(2)}</TableCell>
                    <TableCell align="right">{row.amount}</TableCell>
                    <TableCell align="right">${row.amountInUsd}</TableCell>
                    <TableCell align="right">{row.autoBuying ? <DoneIcon/> : <CancelIcon/>}</TableCell>
                </TableRow>
            ))}
      </TableBody>
    )

}

export default WatchListTableBody;