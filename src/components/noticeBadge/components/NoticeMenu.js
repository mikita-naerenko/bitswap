import Menu from '@mui/material/Menu';


const NoticeMenu = ({anchorEl,open,handleClose, menuItems}) => {
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
            {menuItems}
        </Menu>

    )
}

export default NoticeMenu;