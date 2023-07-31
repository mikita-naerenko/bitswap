


export const dataHandler = (data, interval, INTERVAL_CONFIGS) => {
    const hdata = data.data.map((item) => ({
      priceUsd: Number(item.priceUsd),
      time: new Date(item.time),
    }));
  
    const config = INTERVAL_CONFIGS[interval];
    if (!config) {
      throw new Error('Invalid interval');
    }
  
    const result = { data: [], time: [] };
    for (let i = 0; i < hdata.length; i += config.chunkSize) {
      const chunk = hdata.slice(i, i + config.chunkSize);
      const averageValue = chunk.reduce((acc, cur, i, arr) => {
        acc += cur.priceUsd
        if (i === arr.length -1) {
            return acc / arr.length
        }
        return acc;
    }, 0);

      result.data.push(averageValue);
      result.time.push(chunk[0].time.toLocaleString('en-US', config.timeFormat));
    }
  
    return result;
  };