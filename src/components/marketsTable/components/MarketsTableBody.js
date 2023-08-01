import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';




const MarketsTableBody = ({data}) => {

    return (
        <TableBody>
            {data.map((item,i) => (
            <TableRow
                key={item.exchangeId + i
                }
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th"  scope="row">
                {i + 1}
                </TableCell>
                <TableCell align="right">{item.exchangeId}</TableCell>
                <TableCell align="right">{`${item.baseSymbol}/${item.quoteSymbol}`}</TableCell>
                <TableCell align="right">{Number(item.priceUsd).toFixed(2)}</TableCell>
                <TableCell align="right">{Number(item.volumeUsd24Hr).toFixed(2)}</TableCell>
            </TableRow>
            ))}
      </TableBody>
    )

}


export default MarketsTableBody;