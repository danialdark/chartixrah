const db = require('./db'); // Adjust the path as needed
const axios = require('axios');


async function checkStatus(dataTicker) {
    const currentTimestampInSeconds = Math.floor(Date.now() / 1000);

    const response = await axios.get(`https://www.nahayatnegar.com/tv/chart/history?symbol=${dataTicker}0&resolution=1D&from=0&to=${currentTimestampInSeconds}&countback=2`);
    if (response.data.t == null || response.data.s != "ok") {
        return 0;
    } else {
        if (response.data.t.reverse()[0] > currentTimestampInSeconds - 345600) {
            return 1;
        } else {
            return 0;
        }

    }
}

const checkAgain = async () => {
    try {
        const query = 'SELECT * FROM stock_symbols WHERE status = 0 order by server';
        const response = await db.any(query);
        // Initialize an empty object to store key-value pairs
        for (const symbol of response) {
            const status = await checkStatus(symbol.username.toUpperCase())
            await insertOrUpdateSymbolToDatabase(symbol.name.toUpperCase(), symbol, symbol.server, status)

        }

    } catch (error) {
        // Handle the error, log it, or throw it depending on your needs
        console.error('Error fetching symbols:', error.message);
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



// checkAgain()
module.exports = checkAgain;

// ()

