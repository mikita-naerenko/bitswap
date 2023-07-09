
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../redux/MainCryptoListSlice';


export default function BasicPagination() {
     const { searchResults } = useSelector(state => state.appBar)
    const dispatch = useDispatch();
    const handlePageChange = (event, page) => {
        dispatch(setOffset((Number(page) - 1) * 10));
      };
  return (
    <Stack spacing={2}>
        <Pagination count={searchResults ? Math.ceil(searchResults.data.length / 10)  : 100} onChange={handlePageChange} color="primary" />
    </Stack>
  );
}