
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import PaymentIcon from '@mui/icons-material/Payment';
import MoneyIcon from '@mui/icons-material/Money';
import Shop2Icon from '@mui/icons-material/Shop2';
import VisibilityIcon from '@mui/icons-material/Visibility';
import BoltIcon from '@mui/icons-material/Bolt';
import { FILTER_ITEMS_OBJ } from '../constants';



const IconSwitcher = ({type}) => {

    const iconSwitcher = (type) => {
        switch (type) {
          case FILTER_ITEMS_OBJ.replenish:
            return <PaymentIcon/>;
          case FILTER_ITEMS_OBJ.price:
            return <PriceCheckIcon/>;
          case FILTER_ITEMS_OBJ.send:
            return <MoneyIcon/>;
          case FILTER_ITEMS_OBJ.purchase:
            return <Shop2Icon/>;
          case FILTER_ITEMS_OBJ.watch: 
            return <VisibilityIcon/>;
          case FILTER_ITEMS_OBJ.watchMatch:
            return <BoltIcon/>;
            default:
              return null;
        }
      }
 

    return (
            <>
            {iconSwitcher(type)}
            </>
      )
}

export default IconSwitcher;