const db = require('./db'); // Adjust the path as needed
const jalalimoment = require('jalali-moment');
const moment = require('moment');
const axios = require('axios');
const pgp = require('pg-promise')(); // Import and configure pg-promise


async function getSymbolIdByName(symbolName) {
    try {
        const query = 'SELECT id FROM stock_symbols WHERE name = $1';
        const symbol = await db.oneOrNone(query, symbolName);
        return symbol ? symbol.id : null;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}


const insertCandlestickBatch = async (tableName, batch) => {

    try {
        await db.tx(async (t) => {
            const cs = new pgp.helpers.ColumnSet([
                'symbol_id',
                'symbol_name',
                'open_time',
                'open_price',
                'high_price',
                'low_price',
                'close_price',
                'volumn',
                'close_time',
                'created_at'
            ], { table: tableName });
            const values = batch.map(record => {
                if (record) {
                    return {
                        symbol_id: record.symbol_id,
                        symbol_name: record.symbol_name,
                        open_time: record.open_time,
                        open_price: formatNumberWithTwoDecimals(record.open_price),
                        high_price: formatNumberWithTwoDecimals(record.high_price),
                        low_price: formatNumberWithTwoDecimals(record.low_price),
                        close_price: formatNumberWithTwoDecimals(record.close_price),
                        volumn: record.volumn,  // Corrected typo in property name
                        close_time: record.close_time,
                        created_at: record.created_at
                    };
                }
            });
            const query = pgp.helpers.insert(values, cs) +
                ` ON CONFLICT (symbol_name, created_at) DO NOTHING`;

            await t.none(query);

            console.log(`Data inserted or no-op on conflict into ${tableName} for ${batch.length} records`);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
};



function formatNumberWithTwoDecimals(number) {
    let numberStr = number.toString();

    if (numberStr.includes('.')) {
        // Check if there is already a decimal point in the number
        if (numberStr.endsWith('0')) {
            return numberStr + '0';
        } else {
            return numberStr;
        }
    } else {
        // If there's no decimal point, add '.00' to the end
        return numberStr + '.00';
    }
}

async function getHistory(name, ticker, timeFrames) {
    const fetchedSymbolId = await getSymbolIdByName(name)
    var candlestickBatch = [];

    for (const timeFrame of timeFrames) {
        candlestickBatch = [];
        var tableName = null;

        switch (timeFrame) {
            case "1M":
                tableName = "one_month_stock_candles"
                break;
            case "1W":
                tableName = "one_week_stock_candles"
                break;
            case "1D":
                tableName = "one_day_stock_candles"
                break;
            case "4h":
                tableName = "four_hour_stock_candles"
                break;
            case "1h":
                tableName = "one_hour_stock_candles"
                break;
            case "30m":
                tableName = "thirty_minute_stock_candles"
                break;
            case "15m":
                tableName = "fifteen_minute_stock_candles"
                break;
            case "5m":
                tableName = "five_minute_stock_candles"
                break;
            case "1m":
                tableName = "one_minute_stock_candles"
                break;
            case "1s":
                tableName = "one_second_stock_candles"
                break;

            default:
                break;
        }

        const currentTimestampInSeconds = Math.floor(Date.now() / 1000);
        const response = await axios.get(`https://www.nahayatnegar.com/tv/chart/history?symbol=${ticker}0&resolution=${timeFrame}&from=0&to=${currentTimestampInSeconds}&countback=300`);
        const candlestickData = response.data.t.map((timestamp, index) => {
            const formattedDateTime = moment(timestamp * 1000).utcOffset(0).format('YYYY-MM-DD HH:mm:ss');

            return {
                symbol_id: fetchedSymbolId,
                symbol_name: name,
                open_time: timestamp,
                open_price: formatNumberWithTwoDecimals(response.data.o[index]),
                high_price: formatNumberWithTwoDecimals(response.data.h[index]),
                low_price: formatNumberWithTwoDecimals(response.data.l[index]),
                close_price: formatNumberWithTwoDecimals(response.data.c[index]),
                volumn: response.data.v[index],
                close_time: response.data.c[index], // Assuming close_time is the next timestamp
                created_at: formattedDateTime,
            };

        });
        candlestickBatch.push(...candlestickData);


        await insertCandlestickBatch(tableName, candlestickBatch);

    }
}

// getHistory("BRS0097", "IRO1IKCO0001", ["1M", "1W", "1D", "4h", "1h", "30m", "15m", "5m", "1m"])


module.exports = getHistory;
