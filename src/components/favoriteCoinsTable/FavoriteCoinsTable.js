import { useState } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import FavoriteCoinsTableHead from './components/FavoriteCoinsTableHead';
import FavoriteCoinsTableToolbar from './components/FavoriteCoinsTableToolbar';
import FavoriteCoinsTableBody from './components/FavoriteCoinsTableBody'

  const FavoriteCoinsTable = ({row}) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('rank');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);


  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = row.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <FavoriteCoinsTableToolbar 
                                    numSelected={selected.length} 
                                    selected={selected} 
                                    />
        <TableContainer>
          <Table
                  sx={{ minWidth: 750 }}
                  aria-labelledby="tableTitle"
                  size={'medium'}
                >
            <FavoriteCoinsTableHead
                                    numSelected={selected.length}
                                    order={order}
                                    orderBy={orderBy}
                                    onSelectAllClick={handleSelectAllClick}
                                    onRequestSort={handleRequestSort}
                                    rowCount={row.length}
                                  />
            <FavoriteCoinsTableBody
                                    row={row}
                                    selected={selected}
                                    setSelected={setSelected}
                                    order={order}
                                    orderBy={orderBy}
                                    page={page}
                                    rowsPerPage={rowsPerPage}
                                    />
          </Table>
        </TableContainer>
        <TablePagination
                          rowsPerPageOptions={[5, 10, 25]}
                          component="div"
                          count={row.length}
                          rowsPerPage={rowsPerPage}
                          page={page}
                          onPageChange={handleChangePage}
                          onRowsPerPageChange={handleChangeRowsPerPage}
                        />
      </Paper>
    </Box>
  );
}

export default FavoriteCoinsTable;