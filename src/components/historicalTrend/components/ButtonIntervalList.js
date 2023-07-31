import {
    Button,
    ButtonGroup,
  } from '@mui/material';
  import { BUTTONS_STYLE } from '../constants';



const ButtonIntervalList = ({handleClickIntervalsList, interval, activeButtonInterval, BUTTONS_INTERVAL_DATA}) => {
    
    const renderButtonsIntervalList = (list) => {
        const buttonsList = list.map((item) => {
            return <Button key={item.id} 
                           id={item.id}
                           onClick={(event) => handleClickIntervalsList(event.target.id, interval)}
                           style={{
                            backgroundColor: activeButtonInterval === item.id ? BUTTONS_STYLE.activeBGColor : BUTTONS_STYLE.StatickBGColor,
                            color: activeButtonInterval === item.id ? BUTTONS_STYLE.activeColor : BUTTONS_STYLE.statickColor,
                          }}
                           >
                            {item.textContent}
                    </Button>
        })
        return (
            <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                {buttonsList}
            </ButtonGroup>
        )
    }
    return (
        <>
            {renderButtonsIntervalList(BUTTONS_INTERVAL_DATA)}
        </>
        
    )

    

}

export default ButtonIntervalList;