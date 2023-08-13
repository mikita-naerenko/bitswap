



export const user = {
    avatar: '/assets/avatars/avatar-test-1.png',
        city: '예산군',
        country: '한국',
        jobTitle: 'Senior Developer',
        firstName: 'Mikita',
        lastName: 'Naerenko',
        timezone: 'GTM-7',
        joined: '2023-07-20',
        description: 'Hello World!',
        balance: '100000',
        frozenBalance: 0,
        wallet: {   
                    coinsList :[
                    {coin: 'Bitcoin', valueCoin: 0.05, label: 'BTC', id: "bitcoin", priceUsd: "29171.33"},
                    {coin: 'Tether', valueCoin: 1000, label: 'USDT', id: "tether", priceUsd: "1.00"},
                    {coin: 'BNB', valueCoin: 10, label: 'BNB', id: "binance-coin", priceUsd: "237.34"},
                    {coin: 'Dogecoin', valueCoin: 3000, label: 'DOGE', id: "dogecoin", priceUsd: "0.077229"},
                    ],
                    idToRequest: ["bitcoin", "tether", "binance-coin", "dogecoin"]

                    
                },
        notifications: [
            {
                id: 1,
                time: 1668680000000,
                type: 'replenish',
                title: 'Top up balance',
                textContent: 'The balance was replenished by $100',
                display: true
              },
              {
                id: 2,
                time: 1668683600000,
                type: 'replenish',
                title: 'Top up balance',
                textContent: 'The balance was replenished by $1200',
                display: true,
              },
              {
                id: 3,
                time: 1668687200000,
                type: 'watchMatch',
                title: 'The price of bitcoin has reached the required value',
                textContent: `The price declared in the watcher is 29194. Do you want to buy the coin now? Additionally, you can use our service for auto buying and selling coins.`,
                display: true,
              },
              {
                id: 4,
                time: 1668690800000,
                type: 'send',
                title: 'Transaction',
                textContent: 'You sent part of your assets to the wallet: test&. ',
                display: true,
              },
              {
                id: 5,
                time: 1668694400000,
                type: 'watchMatch',
                title: 'The price of Tether has reached the required value',
                textContent: `The price declared in the watcher is 1.01. Do you want to buy the coin now? Additionally, you can use our service for auto buying and selling coins.`,
                display: true,
              },
              {
                id: 6,
                time: 1668694200000,
                type: 'watch',
                title: 'The bitcoin added to watchlist',
                textContent: `The price declared in the watcher is 24000. Additionally, you can use our service for auto buying and selling coins.`,
                display: true,
              }
            ]
}