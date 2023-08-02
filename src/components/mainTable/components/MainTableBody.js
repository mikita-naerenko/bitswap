import DynamicColorArrow from '../../dynamicColorArrow/DynamicColorArrow';
import ButtonAddToFavorites from '../../buttons/ButtonAddToFavorites';
import PurchaseButton from '../../buttons/PurchaseButton';
import ButtonAddToWatchList from '../../buttonAddToWatchList/ButtonAddToWatchList';
import Box from '@mui/material/Box';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Link from 'next/link';
import { useRef } from 'react';







const MainTableBody = ({row}) => {

    const ref = useRef();


    return (
        <TableBody>
        {row.map((row) => (
     
          <TableRow
                    key={row.rank}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell align="right">
                        <ButtonAddToFavorites 
                                            ref={ref}  
                                            id={row.id}/>
                    </TableCell>
                    <TableCell component="th" 
                               scope="row"
                               >
                                <Link href={`/${row.id}`} key={row.id}>{row.rank}</Link>
                    </TableCell>
                    <TableCell align="right">
                                <Link href={`/${row.id}`}>
                                    {row.name}
                                </Link>
                                <PurchaseButton coin={row}/>
                                <ButtonAddToWatchList coin={row}/>
                    </TableCell>
                    <TableCell  align="right">
                                <Box sx={{ display: 'flex', justifyContent:  'right' }}>
                                    {Number(row.priceUsd).toFixed(2)}
                                    <DynamicColorArrow value={Number(row.priceUsd).toFixed(2)}/>
                                </Box>
                    </TableCell>
                    <TableCell align="right">
                                <Link href={`/${row.id}`}>
                                    {Number(row.volumeUsd24Hr).toFixed(5)}
                                </Link>
                    </TableCell>
                    <TableCell align="right">
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