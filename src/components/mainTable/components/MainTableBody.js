import DynamicColorArrow from '../../dynamicColorArrow/DynamicColorArrow';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Link from 'next/link';
import GroupOfButtonsForTable from '../../buttons/GroupOfButtonsForTable';







const MainTableBody = ({row}) => {

    return (
        <TableBody>
        {row.map((row) => (
     
          <TableRow
                    key={row.rank}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
                >
                    <TableCell 
                                align="left"
                                sx={{width: '150px'}}
                                >
                        <GroupOfButtonsForTable id={row.id} coin={row} />
                    </TableCell>

                    <TableCell component="th" 
                               sx={{width: '50px'}}
                               scope="row"
                               >
                                <Link href={`/${row.id}`} key={row.id}>{row.rank}</Link>
                    </TableCell>
                    <TableCell align="left"
                               sx={{maxWidth: '200px'}}
                                >
                                <Link href={`/${row.id}`}>
                                    {row.name}
                                </Link>
                    </TableCell>
                    <TableCell  align="left" sx={{width: '150px'}}>
                                <Box sx={{ display: 'flex'}}>
                                    {Number(row.priceUsd).toFixed(2)}
                                    <DynamicColorArrow value={Number(row.priceUsd).toFixed(2)}/>
                                </Box>
                    </TableCell>
                    <TableCell align="left">
                                <Link href={`/${row.id}`}>
                                    {Number(row.volumeUsd24Hr).toFixed(5)}
                                </Link>
                    </TableCell>
                    <TableCell align="left">
                                <Link href={`/${row.id}`}>
                                    {Number(row.supply).toFixed(5)}
                                </Link>
                    </TableCell>
          </TableRow>
        
        ))}
      </TableBody>
    )

}

export default MainTableBody;