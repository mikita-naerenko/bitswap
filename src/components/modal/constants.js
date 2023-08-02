


export const STYLED_MODAL = `
    position: fixed;
    z-index: 1300;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    `;

export const STYLED_BACKDROP = `
    z-index: -1;
    position: fixed;
    inset: 0;
    background-color: rgb(0 0 0 / 0.5);
    -webkit-tap-highlight-color: transparent;
    `;

export const STYLE = (theme) => ({
    width: 600,
    borderRadius: '12px',
    padding: '16px 32px 24px 32px',
    backgroundColor: theme.palette.mode === 'dark' ? '#0A1929' : 'white',
    boxShadow: `0px 2px 24px ${theme.palette.mode === 'dark' ? '#000' : '#383838'}`,
    });

export const TYPE_OF_MODAL = {
    payment: 'payment',
    editProfile: 'editProfile',
    purchaseCoin: 'purchaseCoin',
    addToWatchList: 'addToWatchList',
}