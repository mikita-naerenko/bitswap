import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';










const WatchListTableHead = () => {

    return (
    <TableHead>
        <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Desired price</TableCell>
            <TableCell align="right">Actual price</TableCell>
            <TableCell align="right">Price gap</TableCell>
            <TableCell align="right">Price on subscribtion</TableCell>
            <TableCell align="right">Amount coins</TableCell>
            <TableCell align="right">Amount of deals</TableCell>
            <TableCell align="right">Auto purchase feature</TableCell>
      </TableRow>
    </TableHead>
    )

}

export default WatchListTableHead;