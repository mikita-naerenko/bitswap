import {Box} from '@mui/material';
import { Typography, } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ListItem from '@mui/material/ListItem';
import PreviewIcon from '@mui/icons-material/Preview';
import { useDispatch } from 'react-redux';

import ButtonRead from './ButtonRead';
import NoDataMessage from './NoDataMessage';
import IconSwitcher from './IconSwitcher';

import { updateNotificationState } from '../../../redux/AccountProfileSlice';
import { useEffect, useState } from 'react';




const ListItems = ({filteredNoticesArray}) => {
    const dispatch = useDispatch();
    const [flagWatched, setFlagWatched] = useState({flag: false, id: ''})
    const handleChange = (id) => {
        setFlagWatched({flag: !flagWatched.flag, id: id})
    }

    useEffect(() => {
        if(!flagWatched.flag && flagWatched.id) {
            dispatch(updateNotificationState(flagWatched.id))
        }
    },[flagWatched])


    const listItems = filteredNoticesArray.map(notice => {
        const date = new Date(notice.time)
        const dateString = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()}  ${date.getHours()}:${date.getMinutes()} `
        return (
            <ListItem sx={notice.display ? null : {opacity: 0.3}} key={notice.id}>
                <Accordion sx={{ width: '100%' }} onChange={() => handleChange(notice.id)}>
                    <AccordionSummary
                                        expandIcon={<PreviewIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                        
                                        >
                        <Box
                              sx={{
                                   width: '100%',
                                   display: 'flex',
                                   alignItems: 'center',
                                   justifyContent: 'space-between',
                                   
                                  }}
                                  >
                                    <div 
                                          style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            
                                           }}
                                        >
                                    <IconSwitcher type={notice.type}/> 
                                    <Typography sx={{
                                                      mr: 3, 
                                                      ml: 3,
                                                      opacity: 0.7
                                                    }}
                                                
                                        >
                                        {dateString}</Typography>
                                    <Typography>{notice.title}</Typography> 
                                </div>
                                    <ButtonRead id={notice.id}/>
                        </Box>
                        
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                        {notice.textContent}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </ListItem>
        )
      })
    return (
        <>
        {listItems.length > 0 ? listItems : <NoDataMessage/>}
        </>
    )

}

export default ListItems;