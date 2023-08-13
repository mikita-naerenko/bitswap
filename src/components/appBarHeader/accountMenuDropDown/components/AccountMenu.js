import Menu from '@mui/material/Menu';


const AccountMenu = ({anchorEl,open,handleClose, accountMenuItems}) => {
    return (
        <Menu
                PaperProps={{
                            style: {
                                width: '400px', 
                            },
                }}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
                >
            {accountMenuItems}
        </Menu>

    )
}

export default AccountMenu;