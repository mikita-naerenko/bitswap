import { writeOffBalance, addCoinOnWallet, updateIdToRequest, addNewNotification, withdrawalFromFrozenBalance } from '../redux/AccountProfileSlice';
import { setModalPurchaseCoin } from '../redux/ModalStateSlice';
import { createNoticePurchaseCoin, createNoticeAutoPurchaseCoin } from './createNotice';
const { v4: uuidv4 } = require('uuid');



export const purchaseCoin = (values, dispatch, coinToPurchase, calculatedPrice, user, modalPurchaseCoin ) => {

    const newCoin = {
        coin: coinToPurchase.name,
        valueCoin: Number(values.amount),
        label: coinToPurchase.symbol,
        id: coinToPurchase.id,
        priceUsd: coinToPurchase.priceUsd,
        amountOfDeal: Number(values.amount) * Number(coinToPurchase.priceUsd)
      }
      const writeOffFunds = calculatedPrice.toFixed(2);

      if (Number(writeOffFunds) < Number(user.balance)) {
        dispatch(addCoinOnWallet(newCoin));
        dispatch(writeOffBalance(writeOffFunds));
        dispatch(setModalPurchaseCoin(!modalPurchaseCoin));
        dispatch(updateIdToRequest(coinToPurchase.id));
        dispatch(addNewNotification(createNoticePurchaseCoin(newCoin)
        //   { time: new Date().getTime(),
        //                               id: uuidv4(),
        //                               type: 'purchase',
        //                               title: `${newCoin.coin} has been purchased`,
        //                               textContent: `${newCoin.coin} was bought at a price: ${newCoin.priceUsd} in volume: ${newCoin.valueCoin}. The amount of the deal is ${newCoin.amountOfDeal}`,
        //                               display: true,
        // }
        ))
    }
}

export const autoPurchaseCoin = (dispatch, coinToPurchase, user) => {
  const newCoin = {
    coin: coinToPurchase.name,
    valueCoin: Number(coinToPurchase.amount),
    label: coinToPurchase.symbol,
    id: coinToPurchase.id,
    priceUsd: coinToPurchase.priceUsd,
    amountOfDeal: Number(coinToPurchase.amount) * Number(coinToPurchase.currentPrice)
  }
  const currentAmountOfDeal = (Number(coinToPurchase.amount) * Number(coinToPurchase.currentPrice)).toFixed(2);

  if (Number(currentAmountOfDeal) < Number(user.frozenBalance)) {
    dispatch(addCoinOnWallet(newCoin));
    dispatch(withdrawalFromFrozenBalance(currentAmountOfDeal));
    dispatch(updateIdToRequest(coinToPurchase.idForRequest));
    dispatch(addNewNotification(createNoticeAutoPurchaseCoin(newCoin)
    //   { time: new Date().getTime(),
    //                               id: uuidv4(),
    //                               type: 'purchase',
    //                               title: `${newCoin.coin} has been auto purchased`,
    //                               textContent: `${newCoin.coin} was bought at a price: ${newCoin.priceUsd} in volume: ${newCoin.valueCoin}. The amount of the deal is ${newCoin.amountOfDeal}`,
    //                               display: true,
    // }
    ))
}
}