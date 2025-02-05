const ccxt = require('ccxt');

exports.handler = async (event, context) => {
  try {
    const exchange = new ccxt.binance(); // You can use any exchange
    const data = await exchange.fetchOHLCV('BTC/USDT', '1h'); // Fetch last 30 hours data

    return {
      statusCode: 200,
      body: JSON.stringify(data), // Return data as a JSON response
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Error fetching data', error: error.message }),
    };
  }
};
