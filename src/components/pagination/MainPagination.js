
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { useDispatch, useSelector } from 'react-redux';
import { setOffset } from '../../redux/MainCryptoListSlice';
import { calcOffset, calcCountOfPage } from './helper';
import { DEFAULT_COUNT_OF_PAGE } from './constants';

const MainPagination = () => {
     const { countForPagination } = useSelector(state => state.appBar)
    const dispatch = useDispatch();
    const handlePageChange = (event, page) => {
      // Offset's update which dependes on position of button in pagination
        dispatch(setOffset(calcOffset(page)));
      };
  return (
    <Stack spacing={2}>
        <Pagination count={countForPagination ?  calcCountOfPage(countForPagination) : DEFAULT_COUNT_OF_PAGE} 
                    onChange={handlePageChange} 
                    color="primary" />
    </Stack>
  );
}

export default MainPagination;