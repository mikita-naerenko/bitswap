import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



const MainTableHead = () => {

    return (
        <TableHead>
        <TableRow>

          <TableCell align='center'> Quick Actions</TableCell>
          <TableCell width={20}>Rank</TableCell>
          <TableCell align="left">Name</TableCell>
          <TableCell align="left">priceUsd</TableCell>
          <TableCell align="left">volumeUsd24Hr</TableCell>
          <TableCell align="left">Supply</TableCell>
        </TableRow>
      </TableHead>
    )

}

export default MainTableHead;