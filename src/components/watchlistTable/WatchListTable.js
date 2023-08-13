
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import WatchListTableHead from './components/WatchListTableHead';
import WatchListTableBody from './components/WatchListTableBody';




const WatchListTable = ({data}) => {

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <WatchListTableHead/>
            <WatchListTableBody data={data}/>
          </Table>
        </TableContainer>
      );
}

export default WatchListTable;