
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MarketsTableHead from './components/MarketsTableHead';
import MarketsTableBody from './components/MarketsTableBody';

const MarketsTable = ({data, currentCoin}) => {
  return (
    <>
    <Toolbar>
      <Typography>
        
        {currentCoin.charAt(0).toUpperCase() + currentCoin.slice(1)} Markets
      </Typography>
    </Toolbar>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <MarketsTableHead/>
        <MarketsTableBody data={data}/>
      </Table>
    </TableContainer>
    </>
  );
}

export default MarketsTable;