import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Tooltip } from '@mui/material';
import  {Typography}  from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { setFilter } from '../HistorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { FILTER_ITEMS_ARR } from '../constants';


const FilterMenu = ({sx}) => {
  const dispatch = useDispatch();
  const { filter } = useSelector(state => state.history);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (id) => {
    if (typeof id !== 'string') {
      setAnchorEl(null);
    } else {
        dispatch(setFilter(id)) 
    }
    
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        sx={sx}
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
          <Typography>{filter}</Typography>
          <Tooltip title="filter">
              <ExpandMoreIcon/>
          </Tooltip>

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {FILTER_ITEMS_ARR.map(item => {
            return (
                <MenuItem key={item} id={item} onClick={() => handleClose(item)}>{item}</MenuItem>
            )
        })}
        

      </Menu>
    </div>
  );
}

export default FilterMenu;