import TableHead from '@mui/material/TableHead';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';



const MainTableHead = () => {

    return (
        <TableHead>
        <TableRow>
          <TableCell>Favorites</TableCell>
          <TableCell>Rank</TableCell>
          <TableCell align="right">Name</TableCell>
          <TableCell align="right">priceUsd</TableCell>
          <TableCell align="right">volumeUsd24Hr</TableCell>
          <TableCell align="right">Supply</TableCell>
        </TableRow>
      </TableHead>
    )

}

export default MainTableHead;