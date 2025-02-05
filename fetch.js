// netlify/functions/fetchData.js
const ccxt = require('ccxt');

exports.handler = async function(event, context) {
    const exchange = new ccxt.binance();  // Example for Binance API
    const symbol = 'ETH/USDT'; // Example crypto pair
    const timeframe = '1h'; // Timeframe for OHLC data

    try {
        const ohlcv = await exchange.fetchOHLCV(symbol, timeframe, undefined, 30); // Fetch last 30 data points
        return {
            statusCode: 200,
            body: JSON.stringify(ohlcv),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: "Error fetching data", error: error.message }),
        };
    }
};
