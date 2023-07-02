
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { setOffset } from '../redux/MainCryptoListSlice';


export default function BasicPagination() {
    
    const dispatch = useDispatch();

    const handlePageChange = (event, page) => {
        dispatch(setOffset((Number(page) - 1) * 10));
      };
  return (
    <Stack spacing={2}>
        <Pagination count={100} onChange={handlePageChange} color="primary" />
    </Stack>
  );
}