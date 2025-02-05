from flask import Flask, jsonify
import ccxt

app = Flask(__name__)
exchange = ccxt.binance()

@app.route('/ohlcv')
def get_data():
    symbol = 'ETH/USDT'
    timeframe = '15m'
    since = exchange.parse8601('2025-01-05T00:00:00Z')
    ohlcv = exchange.fetch_ohlcv(symbol, timeframe, since)
    
    data = [{"Date": o[0], "Opening": o[1], "High_Value": o[2], "Low_Value": o[3]} for o in ohlcv]
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
