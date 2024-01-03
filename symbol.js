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

const getData = async () => {
    const response = await axios.get(`http://87.107.190.134/brsModern/out/allParamsOut.php?token=a1ec6994fe01bb01f4c85edc14395`);
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
        industryGroup,
        industryGroupCode,
        industrySubGroup,
        industrySubGroupCode,
        rahavardId,
        brsId
    } = symbolData;

    try {
        await db.none(
            `INSERT INTO stock_symbols (name, username,title,alias,status, description , exchange, binance_status ,quote_precision ,server,rahavard_id,industry_group,industry_id,industry_sub_group,industry_sub_id,bours_id )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10,$11,$12,$13,$14,$15,$16)
            ON CONFLICT (name) DO UPDATE
            SET
              name = excluded.name,
              username = excluded.username,
              alias = excluded.alias,
              title = excluded.title,
              status = excluded.status,
              description = excluded.description,
              server = excluded.server,
              rahavard_id = excluded.rahavard_id,
              industry_group = excluded.industry_group,
              industry_id = excluded.industry_id,
              industry_sub_group = excluded.industry_sub_group,
              industry_sub_id = excluded.industry_sub_id,
              bours_id = excluded.bours_id,
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
                serverNumber,
                industryGroup != null ? industryGroup : "ندارد",
                industryGroupCode != null ? industryGroupCode : "ندارد",
                industrySubGroup != null ? industrySubGroup : "ندارد",
                industrySubGroupCode != null ? industrySubGroupCode : "ندارد",
                rahavardId != null ? rahavardId : "ندارد",
                brsId != null ? brsId : "ندارد"
            ]
        );
        console.log(`Inserted/Updated symbol: ${symbol} on server:${serverNumber} that is ${status == 0 ? 'inactive' : "active"}`);
    } catch (error) {
        console.error(`Error saving symbol ${symbol} to PostgreSQL:`, error);
    }
}

module.exports = getData;

// // ()

