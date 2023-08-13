import AccountBadge from "./components/AccountBadge";
import AccountMenu from "./components/AccountMenu";
import AccountMenuItems from "./components/AccountMenuItems";
import { useState } from "react";




const AccountMenuDropDown = ({user}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);

    };
    const handleClose = (event) => {
      
      setAnchorEl(null);
    };

    const handleClickAway = () => {
        setAnchorEl(null);
      };

    return (
      <>
        <AccountBadge
                      open={open}
                      handleClick={handleClick}
                      />
        <AccountMenu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        accountMenuItems={
                                   <AccountMenuItems handleClickAway={handleClickAway} 
                                                     setAnchorEl={setAnchorEl}
                                                     user={user}
                                                     />
                                    }
                        />
      </>
    )
}

export default AccountMenuDropDown;