import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAddToFavorites from './ButtonAddToFavorites';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCoinsForRequest, removeFavoriteCoinsForRequest } from '../redux/MainCryptoListSlice';

import Link from 'next/link';

  export default function BasicTable(props) {
    const dispatch = useDispatch();
    const { favoriteCoinsForRequest } = useSelector(state => state.mainCryptoList);
    const ref = useRef();
    const handleClick = (id) => {
      // Add or remove from favoritesCoin state 
      if (!favoriteCoinsForRequest.includes(id)) {
        dispatch(addFavoriteCoinsForRequest(id));
      } else {
        dispatch(removeFavoriteCoinsForRequest([id]));
      }
    };
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
                <TableCell align="right"><ButtonAddToFavorites ref={ref} onClick={handleClick} id={row.id}/></TableCell>
                <TableCell component="th" scope="row">
                <Link href={`/${row.id}`} key={row.id}>{row.rank}</Link>
                </TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{row.name}</Link></TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{Number(row.priceUsd).toFixed(5)}</Link></TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{Number(row.volumeUsd24Hr).toFixed(5)}</Link></TableCell>
                <TableCell align="right"><Link href={`/${row.id}`}>{Number(row.supply).toFixed(5)}</Link></TableCell>
              </TableRow>
            
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }