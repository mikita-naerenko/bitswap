import ButtonAddToFavorites from "./ButtonAddToFavorites";
import PurchaseButton from "./PurchaseButton";
import ButtonAddToWatchList from "../buttonAddToWatchList/ButtonAddToWatchList";
import ButtonGroup from '@mui/material/ButtonGroup';




const GroupOfButtonsForTable = ({coin,id}) => {

    return (
        <ButtonGroup>
            <ButtonAddToFavorites id={id}/>
            <PurchaseButton coin={coin}/>
            <ButtonAddToWatchList coin={coin}/>
        </ButtonGroup>
    )

}
export default GroupOfButtonsForTable;