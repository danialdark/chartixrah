const db = require('./db'); // Adjust the path as needed
const axios = require('axios');


async function checkStatus(dataTicker) {
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

    const response = await axios.get(`https://www.nahayatnegar.com/tv/chart/history?symbol=${dataTicker}0&resolution=1D&from=0&to=${currentTimestampInSeconds}&countback=2`);
    if (response.data.t == null) {
        return 0;
    } else {
        if (response.data.t.reverse()[0] > currentTimestampInSeconds - 259200) {
            return 1;
        } else {
            return 0;
        }

    }
}

const getData = async () => {
    const response = await axios.get(`http://87.107.190.134/brsModern/out/rsSymOutActive.php`);
    var serverNumber = 1;
    var serverCounter = 1;

    for (const data of response.data) {

        if (serverCounter % 400 == 0) {
            serverNumber++;
        }

        if (data.bourse_ticker != null) {
            const status = await checkStatus(data.bourse_ticker.toUpperCase())
            insertOrUpdateSymbolToDatabase(data.ticker.toUpperCase(), data, serverNumber, status)
        }
        serverCounter++

    }
}



async function insertOrUpdateSymbolToDatabase(symbol, symbolData, serverNumber, status) {
    const {
        title,
        alias,
        ticker,
        bourse_ticker,
        description,
        exchange,
    } = symbolData;

    try {
        await db.none(
            `INSERT INTO stock_symbols (name, username,title,alias,status, description , exchange, binance_status,quote_precision,server)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10)
            ON CONFLICT (name) DO UPDATE
            SET
              name = excluded.name,
              username = excluded.username,
              alias = excluded.alias,
              title = excluded.title,
              status = excluded.status,
              description = excluded.description,
              server = excluded.server,
              exchange = excluded.exchange;`,
            [
                ticker != null ? ticker : "ندارد",
                bourse_ticker != null ? bourse_ticker : "ندارد",
                title != null ? title : "ندارد",
                alias != null ? alias : "ندارد",
                status,
                description != null ? description : "ندارد",
                exchange != null ? exchange : "ندارد",
                1,
                1,
                serverNumber
            ]
        );
        console.log(`Inserted/Updated symbol: ${symbol} on server:${serverNumber} that is ${status == 0 ? 'inactive' : "active"}`);
    } catch (error) {
        console.error(`Error saving symbol ${symbol} to PostgreSQL:`, error);
    }
}

module.exports = getData;

// ()

