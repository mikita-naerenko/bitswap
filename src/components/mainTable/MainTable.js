import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import MainTableHead from './components/MainTableHead';
import MainTableBody from './components/MainTableBody';


const MainTable = ({row}) => {

    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <MainTableHead/>
            <MainTableBody row={row}/>
        </Table>
      </TableContainer>
    );
  }

  export default MainTable;