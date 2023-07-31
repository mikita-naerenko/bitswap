import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { PAGES_NAME } from '../constants';
import { handleClick } from '../helper';
import { setCurrentPage } from '../../../redux/AppBarSlice';

const NavigationItems = () => {
    const dispatch = useDispatch();
    const { currentPage } = useSelector((state) => state.appBar);
  
    return (
      <>
        {Object.keys(PAGES_NAME).map((item) => {
          if (currentPage !== PAGES_NAME[item]) {
            return (
              <Typography variant="h6" component="div" key={PAGES_NAME[item]}>
                <Link
                  href={PAGES_NAME[item] === 'main' ? '/' : `/${PAGES_NAME[item]}/`}
                  onClick={(event) => handleClick(event, dispatch, setCurrentPage)}
                >
                  {PAGES_NAME[item]}
                </Link>
              </Typography>
            );
          }
        })}
      </>
    );
  };

  
  export default NavigationItems;