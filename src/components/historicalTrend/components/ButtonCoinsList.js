import {
    Button,
    ButtonGroup,
    Typography,
    Box
  } from '@mui/material';
  import { BUTTONS_STYLE } from '../constants';



const ButtonsCoinsList = ({handleClickCoinsList,wallet,interval,activeButtonCoin}) => {
    const coinsList = wallet.coinsList.map(coin => coin.label);
    const renderButtonsCoinsList = (list) => {

        const buttonsList = list.map((item,i) => {
            return <Button key={item} 
                           id={wallet.idToRequest[i]}
                           onClick={(event) => handleClickCoinsList(event.target.id, interval)}
                           style={{
                            backgroundColor: activeButtonCoin === wallet.idToRequest[i] ? BUTTONS_STYLE.activeBGColor : BUTTONS_STYLE.StatickBGColor,
                            color: activeButtonCoin === wallet.idToRequest[i] ? BUTTONS_STYLE.activeColor : BUTTONS_STYLE.statickColor,
                          }}
                           >
                            {item}
                    </Button>
        })
        return (
            <Box sx={{mb: 1}}>
                <Typography>Select coin from your wallet:</Typography>
                <ButtonGroup size="small" variant="outlined" aria-label="outlined button group">
                {buttonsList}
            </ButtonGroup>
            </Box>
            
        )
    }
    return (
        <>
            {renderButtonsCoinsList(coinsList)}
        </>
        
    )

    

}

export default ButtonsCoinsList;