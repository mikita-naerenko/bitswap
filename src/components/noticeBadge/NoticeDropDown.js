import MenuItems from "./components/MenuItems";
import NoticeMenu from "./components/NoticeMenu";
import NoticeBadge from "./components/NoticeBadge";
import { useState } from 'react';
import { useSelector } from "react-redux";
 
const NoticeDropDown = () => {
    const { user } = useSelector(state => state.accountProfile);
    const { notifications: notificationsWatcher } = useSelector(state => state.watcherPrice);
    const notifications = user.notifications.concat(notificationsWatcher).sort((a,b) => b.time - a.time);
    const noticeCount = user.notifications.filter(notice => notice.display).length + notificationsWatcher.length;
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
            <NoticeBadge
                         open={open}
                         handleClick={handleClick}
                         noticeCount={noticeCount}
                         />
            <NoticeMenu
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        menuItems={
                                   <MenuItems handleClickAway={handleClickAway} 
                                              noticeCount={noticeCount} 
                                              notifications={notifications} 
                                              setAnchorEl={setAnchorEl}/>
                                    }
                        />
        </>
    )


}

export default NoticeDropDown;