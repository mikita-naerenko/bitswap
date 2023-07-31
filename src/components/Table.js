import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ButtonAddToFavorites from './buttons/ButtonAddToFavorites';
import PurchaseButton from './buttons/PurchaseButton';
import { useRef } from 'react';
import DynamicColorArrow from './dynamicColorArrow/DynamicColorArrow'


import Link from 'next/link';

  export default function BasicTable(props) {

    const ref = useRef();

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          <TableBody>
            {props.row.map((row) => (
              
              
              <TableRow
                key={row.rank}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="right"><ButtonAddToFavorites ref={ref}  id={row.id}/></TableCell>
                <TableCell component="th" scope="row">
                <Link href={`/${row.id}`} key={row.id}>{row.rank}</Link>
                </TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{row.name}</Link><PurchaseButton coin={row}/></TableCell>
                <TableCell  align="right">
                        <Box sx={{ display: 'flex', justifyContent:  'right' }}>
                          {Number(row.priceUsd).toFixed(2)}
                          <DynamicColorArrow value={Number(row.priceUsd).toFixed(2)}/>
                        </Box>
                    </TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{Number(row.volumeUsd24Hr).toFixed(5)}</Link></TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{Number(row.supply).toFixed(5)}</Link></TableCell>
              </TableRow>
            
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }