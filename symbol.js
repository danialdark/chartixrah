const db = require('./db'); // Adjust the path as needed
const axios = require('axios');


const getData = async () => {
    const response = await axios.get(`http://87.107.190.134/brsModern/out/rsSymOutActive.php`);
    var serverNumber = 1;
    var serverCounter = 1;


    for (const data of response.data) {

        if (serverCounter % 400 == 0) {
            serverNumber++;
        }

        insertOrUpdateSymbolToDatabase(data.ticker.toUpperCase(), data, serverNumber)
        serverCounter++

    }
}



async function insertOrUpdateSymbolToDatabase(symbol, symbolData, serverNumber) {
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
              description = excluded.description,
              server = excluded.server,
              exchange = excluded.exchange;`,
            [
                ticker != null ? ticker : "ندارد",
                bourse_ticker != null ? bourse_ticker : "ندارد",
                title != null ? title : "ندارد",
                alias != null ? alias : "ندارد",
                1,
                description != null ? description : "ندارد",
                exchange != null ? exchange : "ندارد",
                1,
                1,
                serverNumber
            ]
        );
        console.log(`Inserted/Updated symbol: ${symbol} on server:${serverNumber}`);
    } catch (error) {
        console.error(`Error saving symbol ${symbol} to PostgreSQL:`, error);
    }
}

module.exports = getData;

// ()

