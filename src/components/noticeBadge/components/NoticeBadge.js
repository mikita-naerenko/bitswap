import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const NoticeBadge = ({open, handleClick, noticeCount, }) => {

  return (
    <>
    <IconButton
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
    
    >
      <StyledBadge badgeContent={noticeCount ? noticeCount : null} color="secondary">
        <NotificationsIcon />
      </StyledBadge>
    </IconButton>
  </>
  );
}

export default NoticeBadge;