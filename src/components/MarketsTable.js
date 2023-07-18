import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

export default function MarketsTable({data, currentCoin}) {
  return (
    <>
    <Toolbar>
      <Typography>
        
        {currentCoin.charAt(0).toUpperCase() + currentCoin.slice(1)} Markets
      </Typography>
    </Toolbar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Exhange</TableCell>
            <TableCell align="right">Pair</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Volume (24h)</TableCell>
          </TableRow>
        </TableHead>
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
      </Table>
    </TableContainer>
    </>
  );
}