import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useDispatch } from 'react-redux';
import { removeFavoriteCoinsForRequest } from '../../../redux/MainCryptoListSlice';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';





const FavoriteCoinsTableToolbar = (props) => {
    const dispatch = useDispatch();
    function handleClick (selected) {
        // Remove selected coins from favorite list
        dispatch(removeFavoriteCoinsForRequest(selected))
    }
  const { numSelected, selected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%' }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Favorite Coins
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton onClick={() => handleClick(selected)}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}

FavoriteCoinsTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

export default FavoriteCoinsTableToolbar;