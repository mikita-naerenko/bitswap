import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';








const MarketsTableHead = () => {

return (
    <TableHead>
        <TableRow>
        <TableCell>#</TableCell>
        <TableCell align="right">Exhange</TableCell>
        <TableCell align="right">Pair</TableCell>
        <TableCell align="right">Price</TableCell>
        <TableCell align="right">Volume (24h)</TableCell>
        </TableRow>
  </TableHead>
)
}


export default MarketsTableHead;