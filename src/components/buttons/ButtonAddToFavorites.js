import GradeIcon from '@mui/icons-material/Grade';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoriteCoinsForRequest, removeFavoriteCoinsForRequest } from '../../redux/MainCryptoListSlice';

const ButtonAddToFavorites = forwardRef((props, ref) => {
  const dispatch = useDispatch();
    const { favoriteCoinsForRequest } = useSelector(state => state.mainCryptoList);

    const handleClick = (id) => {
      // Add or remove from favoritesCoin state 
      if (!favoriteCoinsForRequest.includes(id)) {
        dispatch(addFavoriteCoinsForRequest(id));
      } else {
        dispatch(removeFavoriteCoinsForRequest([id]));
      }
    };
    return (
      <Stack direction="row" spacing={1}>
        <IconButton ref={ref} 
                    onClick={() => handleClick(props.id)} 
                    style={favoriteCoinsForRequest.includes(props.id) ? { color: 'yellow', opacity: '1' } : { color: 'gray', opacity: '0.7' }} 
                    aria-label="add to favorites">
          <GradeIcon />
        </IconButton>
      </Stack>
    );
  });

export default ButtonAddToFavorites;