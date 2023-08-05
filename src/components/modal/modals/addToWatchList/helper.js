const { v4: uuidv4 } = require('uuid');



export const createNoticeForWatchList = (coinToAdd, newData) => {
    return {
            time: new Date().getTime(),
            id: uuidv4(),
            type: 'watch',
            title: `The ${coinToAdd.name} added to watchlist`,
            textContent: `The price declared in the watcher is ${newData.desiredPrice}. Additionally, you can use our service for auto buying and selling coins.`,
            display: true,
            autoBuying: newData.autoBuying,
    }
}

export const createNoticeForWatchListAndAutoPurchase = (coinToAdd,newData) => {
  return  {
        time: new Date().getTime(),
        id: uuidv4(),
        type: 'watch',
        title: `The ${coinToAdd.name} added to auto purchase list`,
        textContent: `The price declared in the watcher is ${newData.desiredPrice}.
                     Amount of deal is ${newData.amount} coin.
                     Amount in usd id ${newData.amountInUsd}.
                     Amount frozen in your account for purchase: ${newData.amountInUsd} `,
        display: true,
        autoBuying: newData.autoBuying,
        }
}