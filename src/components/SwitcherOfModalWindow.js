import Payment from "./modals/Payment";
import EditAccountProfile from "./modals/EditAccountProfile";

const getComponent = (type) => {
    switch (type) {
        case 'payment':
            return <Payment/>;
        case 'editProfile': 
            return <EditAccountProfile/>;
        case 'purchaseCoin': 
            return <Payment/>;
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