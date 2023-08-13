const { v4: uuidv4 } = require('uuid');



export const createNoticeRemoveFromWatchList = (data) => {
    return { time: new Date().getTime(),
            id: uuidv4(),
            type: 'removeFromWatchList',
            title: `${data.name} removed from watchlist`,
            textContent: `${data.name} removed from watch list ${data.autoBuying ? 'and from auto purchase list' : '.'}`,
            display: true,
    }
}

export const createNoticePurchaseCoin = (data) => {
    return { time: new Date().getTime(),
        id: uuidv4(),
        type: 'purchase',
        title: `${data.coin} has been purchased`,
        textContent: `${data.coin} was bought at a price: ${data.priceUsd} in volume: ${data.valueCoin}. The amount of the deal is ${data.amountOfDeal}`,
        display: true,
}
}

export const createNoticeAutoPurchaseCoin = (data) => {
    return { time: new Date().getTime(),
        id: uuidv4(),
        type: 'purchase',
        title: `${data.coin} has been auto purchased`,
        textContent: `${data.coin} was bought at a price: ${data.priceUsd} in volume: ${data.valueCoin}. The amount of the deal is ${data.amountOfDeal}`,
        display: true,
}
}

export const createNoticeWatchMatch = (data,newCoin) => {
    return {
        id: uuidv4(),
        time: new Date().getTime(),
        type: 'watchMatch',
        title: `The price of ${data.name} has reached the required value`,
        textContent: `The price declared in the watcher is ${Number(data.desiredPrice).toFixed(2)}. Price at ${new Date().toLocaleString()} is ${newCoin.priceUsd}. Do you want to buy the coin now? Additionally, you can use our service for auto buying and selling coins.`,
        display: true,
      }
}

export const createNoticeReplenish = (payment) => {
    return { 
        time: new Date().getTime(),
        id: uuidv4(),
        type: 'replenish',
        title: 'Top up balance',
        textContent: `The balance was replenished by $${payment}`,
        display: true,
      }
}

