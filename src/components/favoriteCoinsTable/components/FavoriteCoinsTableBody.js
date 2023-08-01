import Checkbox from '@mui/material/Checkbox';
import PurchaseButton from './PurchaseButton';
import DynamicColorArrow from '../../dynamicColorArrow/DynamicColorArrow';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { stableSort, getComparator } from '../helper';





const FavoriteCoinsTableBody = (props) => {
    const { row, order, orderBy, selected, page, rowsPerPage, setSelected } = props;


    const isSelected = (name) => selected.indexOf(name) !== -1;
    const visibleRows = useMemo(
        () =>
          stableSort(row, getComparator(order, orderBy)).slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage,
          ),
        [order, orderBy, page, rowsPerPage, row],
      );
      const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - row.length) : 0;

      const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];
    
        if (selectedIndex === -1) {
          newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
          newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
          newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
          newSelected = newSelected.concat(
            selected.slice(0, selectedIndex),
            selected.slice(selectedIndex + 1),
          );
        }
        setSelected(newSelected);
      };


    return (
        <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                            hover
                            onClick={(event) => {
                                handleClick(event, row.id)
                            }}
                            role="checkbox"
                            aria-checked={isItemSelected}
                            tabIndex={-1}
                            key={row.id}
                            selected={isItemSelected}
                            sx={{ cursor: 'pointer' }}
                        >
                                <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    checked={isItemSelected}
                                    inputProps={{
                                    'aria-labelledby': labelId,
                                    }}
                                />
                                </TableCell>
                                <TableCell
                                component="th"
                                id={labelId}
                                scope="row"
                                padding="none"
                                >
                                {row.name}<PurchaseButton coin={row}/>
                                </TableCell>
                                <TableCell align="right">{Number(row.rank)}</TableCell>
                                <TableCell  align="right">
                                    <Box sx={{ display: 'flex', justifyContent:  'right' }}>
                                    {Number(row.priceUsd).toFixed(2)}
                                    <DynamicColorArrow value={Number(row.priceUsd).toFixed(2)}/>
                                    </Box>
                                </TableCell>
                                <TableCell align="right">{Number(row.volumeUsd24Hr).toFixed(2)}</TableCell>
                                <TableCell align="right">{Number(row.supply).toFixed(2)}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
    )

}

export default FavoriteCoinsTableBody;