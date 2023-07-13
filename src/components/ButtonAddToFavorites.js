import GradeIcon from '@mui/icons-material/Grade';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ButtonAddToFavorites = forwardRef((props, ref) => {
    const { favoritesCoin } = useSelector(state => state.mainCryptoList);
    return (
      <Stack direction="row" spacing={1}>
        <IconButton ref={ref} 
                    onClick={() => props.onClick(props.id)} 
                    style={favoritesCoin.includes(props.id) ? { color: 'red', opacity: '0.5' } : { color: '#F3FD0A', opacity: '0.5' }} 
                    aria-label="add to favorites">
          <GradeIcon />
        </IconButton>
      </Stack>
    );
  });

export default ButtonAddToFavorites;