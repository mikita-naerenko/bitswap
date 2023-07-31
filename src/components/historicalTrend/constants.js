    // m1 - 24h interval 1m
    // h1 - 1 month interval 1h
    // h6 - 6 month interval 6h
    // h12 - 1 year interval 12h
    // d1 - 1 year interval 1d


 export   const BUTTONS_INTERVAL_DATA = [
        {id: 'm1', textContent: '24H'},
        {id: 'h1', textContent: '30D'},
        {id: 'h6', textContent: '6M'},
        {id: 'd1', textContent: '12M'},
        
    ];
export    const INTERVAL_CONFIGS = {
    m1: { chunkSize: 60, timeFormat: { hour: '2-digit', minute: '2-digit' } },
    h1: { chunkSize: 24, timeFormat: { month: 'short', day: '2-digit' } },
  //   h6 config has the issue, chart's size doesn't allow to display all data. Over 30 elements is collapsing
    h6: { chunkSize: 30, timeFormat: { month: 'short', day: '2-digit' } },
    d1: { chunkSize: 30, timeFormat: { year: 'numeric', month: 'short' } },
  };

export const BUTTONS_STYLE = {
    activeColor: '#fff',
    activeBGColor: '#1976d2',
    statickColor: '#000',
    StatickBGColor: 'transparent',
}
