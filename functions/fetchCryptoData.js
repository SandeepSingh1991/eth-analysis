const ccxt = require('ccxt');

exports.handler = async (event, context) => {
  try {
    const exchange = new ccxt.binance();
    const data = await exchange.fetchOHLCV('BTC/USDT', '1h'); // Fetch 1-hour data
    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data', error: error.message }),
    };
  }
};
