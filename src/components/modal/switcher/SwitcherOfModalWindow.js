import Payment from "../modals/payment/Payment";
import EditAccountProfile from "../modals/editAccountProfile/EditAccountProfile";
import PurchaseCoin from "../modals/purchaseCoin/PurchaseCoin";
import AddToWatchList from "../modals/addToWatchList/AddToWatchList";
import { TYPE_OF_MODAL } from '../constants';

const getComponent = (type) => {
    switch (type) {
        case TYPE_OF_MODAL.payment:
            return <Payment/>;
        case TYPE_OF_MODAL.editProfile: 
            return <EditAccountProfile/>;
        case TYPE_OF_MODAL.purchaseCoin: 
            return <PurchaseCoin/>;
        case TYPE_OF_MODAL.addToWatchList:
            return <AddToWatchList/>
        default: 
            return null;
    }
}


const SwitcherOfModalsWindow = ({type}) => {

    return (
        <>
        {getComponent(type)}
        </>
    )
}
export default SwitcherOfModalsWindow;