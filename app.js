const symbols = {}

const getData = require('./symbol')
const db = require('./db'); // Adjust the path as needed
const Redis = require('ioredis');
const port = 3000;

const redis = new Redis({
    host: '91.107.160.210',
    port: '6379',
    password: 'D@n!@l12098',
    enableCompression: true,
});

var pipeline = redis.pipeline();
const jalalimoment = require('jalali-moment');
const moment = require('moment');


const WebSocket = require('ws');

const redisTimeFrames = {
    "1m": "1",
    "5m": "5",
    "15m": "15",
    "30m": "30",
    "1h": "60",
    "4h": "240",
    "1d": "1D",
    "1w": "1W",
    "1M": "1M",
}

const headers = {
    Origin: 'https://www.nahayatnegar.com',
};


const symbolConfigs = {
    0: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    1: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    2: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    3: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    4: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    5: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    6: {
        "5m": [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        "15m": [0, 15, 30, 45, 60],
        "30m": [0, 30, 60],
        "1h": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
        "4h": [1, 5, 9, 13, 17, 21],
        "1d": [0, 24],
        "1w": [0, 24],
        "1M": [0, 24],
    },
    isHalf: false
}


function getFirstDayInfo() {
    const currentDate = jalalimoment();
    const firstDay = jalalimoment(currentDate).startOf('jMonth');
    const firstDayOfWeek = jalalimoment(currentDate).startOf('jWeek');
    const isoString = firstDay.toISOString();
    const isoStringWeek = firstDayOfWeek.toISOString();

    // Parse the ISO string using the Date object
    const parsedDate = new Date(isoString);
    const parsedDateWeek = new Date(isoStringWeek);

    // Get the day of the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
    const dayOfWeek = parsedDateWeek.getUTCDate() + 1;

    // Get the day of the month
    const dayOfMonth = parsedDate.getUTCDate() + 1;
    const Month = parsedDate.getUTCMonth();

    return { dayOfWeek, dayOfMonth, Month };
}

const tableMap = {
    "1M": "one_month_stock_candles",
    "1w": "one_week_stock_candles",
    "1d": "one_day_stock_candles",
    "4h": "four_hour_stock_candles",
    "1h": "one_hour_stock_candles",
    "30m": "thirty_minute_stock_candles",
    "15m": "fifteen_minute_stock_candles",
    "5m": "five_minute_stock_candles",
    "1m": "one_minute_stock_candles",
    "1s": "one_second_stock_candles",
};

async function getSymbolIdByName(name) {
    try {
        const query = 'SELECT id FROM stock_symbols WHERE name = $1';
        const symbol = await db.oneOrNone(query, name);
        return symbol ? symbol.id : null;
    } catch (error) {
        console.error('Error:', error.message);
        throw error;
    }
}

async function makeMyOpenTime(symbolConfig, timeFrame) {
    const candleTime = new Date();
    candleTime.setUTCHours(candleTime.getUTCHours() + 3);
    candleTime.setUTCMinutes(candleTime.getUTCMinutes() + 30);
    var dayOfMonth = candleTime.getUTCDate();
    const candleHour = candleTime.getUTCHours();
    const candleMinute = candleTime.getUTCMinutes();
    const candleYear = candleTime.getUTCFullYear();
    var candleMonth = candleTime.getUTCMonth();
    const dayOfWeek = candleTime.getUTCDay(); // 0 is Sunday
    if (timeFrame == "5m" || timeFrame == "15m" || timeFrame == "30m") {

        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleMinute);

        // Remove numbers less than candleMinute
        const biggerTime = Math.min(...filteredArray);

        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger < candleMinute < biggerTime) {

            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, candleHour - 3, oneBeforBigger - 30)).getTime() / 1000;
        } else {
            // yani candle jadid bayad baz beshe

            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, candleHour - 3, biggerTime - 30)).getTime() / 1000;

        }

    } else {
        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleHour);

        const shouldAdd = symbolConfig.isHalf ? 30 : 0;
        // Remove numbers less than candleHour

        const shouldRemoveHour = symbolConfig.isHalf ? 1 : 0;
        // Remove numbers less than candleHour

        if (timeFrame == "1w") {

            dayOfMonth = getFirstDayInfo().dayOfWeek;
        }

        if (timeFrame == "1M") {
            dayOfMonth = getFirstDayInfo().dayOfMonth;
            candleMonth = getFirstDayInfo().Month
        }

        var biggerTime = Math.min(...filteredArray);
        if (biggerTime == undefined || biggerTime == Infinity || biggerTime == AllArray[0]) {
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, AllArray[AllArray.length - 1] - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;
        }
        // Find the index of the biggerTime Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = (minIndex != 0 && minIndex != Infinity) ? AllArray[minIndex - 1] : AllArray[0];


        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger < candleHour < biggerTime) {
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, oneBeforBigger - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;
        } else {
            // yani candle jadid bayad baz beshe
            return new Date(Date.UTC(candleYear, candleMonth, dayOfMonth, biggerTime - shouldRemoveHour - 3, 0 + shouldAdd - 30)).getTime() / 1000;

        }

    }

}

function getFirstDayOfMonthNotFridayOrThursday() {
    const currentDate = new Date();
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);

    while (firstDay.getDay() === 6 || firstDay.getDay() === 5 || firstDay.getDay() === 4) {
        firstDay.setDate(firstDay.getDate() + 1);
    }

    return firstDay;
}

const checkConfigTime = async (candleTimeStamp, symbolConfig, timeFrame, oneMinuteTime) => {
    const oneMinuteCandleTime = new Date((oneMinuteTime + 12600) * 1000);
    const dayOfWeek = oneMinuteCandleTime.getUTCDay(); //0 is sunday
    const dayOfMonth = oneMinuteCandleTime.getUTCDate();  //0 is sunday
    const candleHour = oneMinuteCandleTime.getUTCHours();
    const candleMinute = oneMinuteCandleTime.getUTCMinutes();
    const myCandleTime = new Date((candleTimeStamp + 12600) * 1000);
    const myCandleHour = myCandleTime.getUTCHours();
    const myCandleMinute = myCandleTime.getUTCMinutes();
    const dayOfCandle = myCandleTime.getUTCDate();


    if (timeFrame == "5m" || timeFrame == "15m" || timeFrame == "30m") {
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleMinute);
        const AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);

        const biggerTime = Math.min(...filteredArray);

        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        const oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger <= myCandleMinute && myCandleMinute < biggerTime) {
            return true;
        } else {
            return false;

        }


    } else {
        const filteredArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num > candleHour);
        var AllArray = symbolConfig[dayOfWeek][timeFrame].filter(num => num >= 0);


        var biggerTime = Math.min(...filteredArray);



        // Find the index of the smallest Number
        const minIndex = AllArray.indexOf(biggerTime);

        var oneBeforBigger = minIndex != 0 ? AllArray[minIndex - 1] : AllArray[0];

        if (biggerTime == undefined || biggerTime == Infinity || biggerTime == AllArray[0]) {


            biggerTime = AllArray[AllArray.length - 1];
            oneBeforBigger = AllArray[0];



            // inja miaym shart haye estesnaye rooz o maho hafte ro mizarim 
            if (timeFrame == "1d") {
                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle)) {
                    // yani candle jadid bayad baz beshe
                    return false;
                } else {
                    return true;
                }
            }

            // inja miaym shart haye estesnaye rooz o maho hafte ro mizarim 
            if (timeFrame == "1w") {
                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle) && dayOfWeek == 0) {
                    return false;
                } else {
                    return true;
                }
            }

            if (timeFrame == "1M") {
                const thisMonth = getFirstDayOfMonthNotFridayOrThursday().getDate();

                if ((candleHour >= biggerTime) && (dayOfMonth != dayOfCandle) && dayOfMonth == thisMonth) {
                    return false;
                } else {
                    // yani candle jadid bayad baz beshe
                    return true;
                }
            }

            // this will work for 4h 
            if (biggerTime <= myCandleHour && myCandleHour >= oneBeforBigger) {
                // sat 22 23
                return true;
            } else {
                // for 0 1 
                if (myCandleHour <= oneBeforBigger) {
                    return true
                } else {
                    return false;

                }


            }
        }



        // yani hanooz be candle badi nareside va bayad edame bede
        if (oneBeforBigger <= myCandleHour && myCandleHour < biggerTime) {
            return true;
        } else {
            // yani candle jadid bayad baz beshe
            return false;
        }

    }
}


const candleChecker = async (timeFrame, allCandles, symbolConfig, candleStamp) => {
    // aval check mikonim candle az ghabl vojood darad ya na
    if (allCandles[timeFrame][0] != undefined) {
        // check mishavad ke aya bayad edame dade shavad ya kheir
        // bayad check konim ke data ke alan oomade az lahaze zamani ba config set hast ya na?
        const checker = await checkConfigTime(allCandles[timeFrame][0].t, symbolConfig, timeFrame, candleStamp)
        return checker;
    }

    // agar vojood nadarad barash yeki baz mikonim dar zamane moshakhas
    else {
        return false;
    }

}


async function saveCandleDataToPostgreSQL(symbol, timeFrame, newCandle) {
    const fetchedSymbolId = await getSymbolIdByName(symbol.toUpperCase());
    const timestampMilliseconds = newCandle.t * 1000; // Unix timestamp in milliseconds
    const modifiedFormattedDateTime = moment(timestampMilliseconds).utc().format('YYYY-MM-DD HH:mm:ss');
    console.log(`going to save for ${timeFrame}`)
    try {
        await db.none(
            `INSERT INTO ${tableMap[timeFrame]} (symbol_id, symbol_name, open_time, open_price, high_price, low_price, close_price, volumn, close_time, created_at) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            ON CONFLICT (symbol_name, created_at) DO UPDATE
            SET 
                open_price = excluded.open_price,
                high_price = excluded.high_price,
                low_price = excluded.low_price,
                close_price = excluded.close_price,
                volumn = excluded.volumn,
                close_time = excluded.close_time;`,
            [
                fetchedSymbolId,
                symbol.toUpperCase(),
                newCandle.t,
                newCandle.o,
                newCandle.h,
                newCandle.l,
                newCandle.c,
                newCandle.v != null ? newCandle.v : 0,
                newCandle.T,
                modifiedFormattedDateTime,
            ]
        );

        console.log(`data saved to ${timeFrame} for ${symbol}`)
    } catch (error) {
        console.error('Error saving candle data to PostgreSQL:', error);
    }
}


const shouldMakeAllTimeFrames = ['1m', '5m', '15m', '30m', '1h', '4h', '1d', '1w', '1M'];


const makeOtherCandles = async (allCandles, smallestTimeFrame, lastVolume, username, name, lastTimeStamp) => {

    // now we will make other candles from 1 minute last candle
    const indexToKeep = shouldMakeAllTimeFrames.indexOf(smallestTimeFrame);
    var resultArray = null

    if (indexToKeep !== -1) {
        resultArray = shouldMakeAllTimeFrames.slice(indexToKeep + 1);
    } else {
        console.log(`The element ${smallestTimeFrame} was not found in the array.`);
    }




    const lastOneMinuteCandle = allCandles[smallestTimeFrame][0];
    const candleStamp = allCandles[smallestTimeFrame][0].t;


    const symbolConfig = symbolConfigs;

    if (lastOneMinuteCandle != undefined) {
        for (const timeframe of resultArray) {
            var shouldContinueCandle = false;
            var addedTime = 0;
            var startTime = 0;
            var newV = false
            var checker = await candleChecker(timeframe, allCandles, symbolConfig, candleStamp);
            switch (timeframe) {
                case '5m':
                    addedTime = 300;
                    break;

                case '15m':
                    addedTime = 1500;
                    break;

                case '30m':
                    addedTime = 3000;
                    break;

                case '1h':
                    addedTime = 6000;
                    break;

                case '4h':
                    addedTime = 24000;
                    break;

                case '1d':
                    addedTime = 86400;
                    break;

                case '1w':
                    addedTime = 604800;
                    break;

                case '1M':
                    addedTime = 2629743;
                    break;

                default:
                    addedTime = 0;
                    break;
            }

            if (checker) {
                shouldContinueCandle = true;
                startTime = allCandles[timeframe][0].t;
                timestamp = startTime; // Unix timestamp in seconds
            } else {
                const madeOpenTime = await makeMyOpenTime(symbolConfig, timeframe);
                startTime = madeOpenTime
            }

            var shouldBe = 0;
            var openPrice, high, low, closeTime;


            // this is for v
            if (shouldContinueCandle) {
                if ((lastOneMinuteCandle.t == lastTimeStamp)) {
                    shouldBe = allCandles[timeframe][0].v + lastOneMinuteCandle.v - lastVolume
                } else {
                    shouldBe = allCandles[timeframe][0].v + lastOneMinuteCandle.v
                }

                openPrice = allCandles[timeframe][0].o;
                closeTime = allCandles[timeframe][0].t + addedTime


                if (allCandles[timeframe][0].h < lastOneMinuteCandle.h) {
                    high = lastOneMinuteCandle.h
                } else {
                    high = allCandles[timeframe][0].h
                }

                if (allCandles[timeframe][0].l > lastOneMinuteCandle.l) {
                    low = lastOneMinuteCandle.l
                } else {
                    low = allCandles[timeframe][0].l
                }
            } else {
                shouldBe = lastOneMinuteCandle.v;
                openPrice = lastOneMinuteCandle.o;
                high = lastOneMinuteCandle.h
                low = lastOneMinuteCandle.l
                closeTime = lastOneMinuteCandle.t + addedTime
            }




            const newCandle = {
                t: startTime,
                T: closeTime,
                o: formatNumberWithTwoDecimals(openPrice),
                h: formatNumberWithTwoDecimals(high),
                l: formatNumberWithTwoDecimals(low),
                c: formatNumberWithTwoDecimals(lastOneMinuteCandle.c),
                v: shouldBe,
            };


            // now we will add to each time Frame
            const existingCandleIndex = allCandles[timeframe].findIndex((candle) => candle.t == newCandle.t);

            if (existingCandleIndex >= 0) {
                // Update existing candle
                allCandles[timeframe][existingCandleIndex] = newCandle;
            } else {

                // Add new candle at the beginning
                await allCandles[timeframe].unshift(newCandle);

                if (allCandles[timeframe].length >= 2) {

                    if (allCandles[timeframe][1] != undefined) {

                        const shouldSaveCandleFirst = {
                            t: allCandles[timeframe][0].t,
                            T: allCandles[timeframe][0].T,
                            c: allCandles[timeframe][0].c,
                            h: allCandles[timeframe][0].h,
                            l: allCandles[timeframe][0].l,
                            o: allCandles[timeframe][0].o,
                            v: allCandles[timeframe][0].v,
                        };

                        saveCandleDataToPostgreSQL(name, timeframe, shouldSaveCandleFirst);


                        const shouldSaveCandle = {
                            t: allCandles[timeframe][1].t,
                            T: allCandles[timeframe][1].T,
                            c: allCandles[timeframe][1].c,
                            h: allCandles[timeframe][1].h,
                            l: allCandles[timeframe][1].l,
                            o: allCandles[timeframe][1].o,
                            v: allCandles[timeframe][1].v,
                        };

                        saveCandleDataToPostgreSQL(name, timeframe, shouldSaveCandle);

                        if (allCandles[timeframe].length == 3) {
                            // Remove excess candles
                            await allCandles[timeframe].pop();
                        }
                    }
                }


            }
        }
        redis.pipeline().set(`${name.toLowerCase()}`, JSON.stringify(allCandles)).expire(`${name.toLowerCase()}`, 259200).exec();

    }
}



async function moveRedisToRam(name) {
    try {
        const result = await redis.get(name.toLowerCase());
        const parsedResult = JSON.parse(result);

        if (parsedResult !== null) {
            return parsedResult;
        } else {
            const shouldSendResult = { "1m": [], "5m": [], "15m": [], "30m": [], "1h": [], "4h": [], "1d": [], "1w": [], "1M": [] };

            await Promise.all(Object.keys(redisTimeFrames).map(async (redisTimeFrame) => {

                const rediResult = await redis.get(`${redisTimeFrames[redisTimeFrame]}-${name.toLowerCase()}`);

                const parsedRediResult = JSON.parse(rediResult);

                if (parsedRediResult !== null) {
                    shouldSendResult[redisTimeFrame][0] = {
                        t: parsedRediResult[0].open_time,
                        T: parsedRediResult[0].close_time,
                        o: formatNumberWithTwoDecimals(parsedRediResult[0].open_price),
                        h: formatNumberWithTwoDecimals(parsedRediResult[0].high_price),
                        l: formatNumberWithTwoDecimals(parsedRediResult[0].low_price),
                        c: formatNumberWithTwoDecimals(parsedRediResult[0].close_price),
                        v: parsedRediResult[0].volumn,
                    };
                }
            }));
            return shouldSendResult;
        }
    } catch (error) {
        console.error('Error fetching data from Redis:', error);
        // Handle the error or return an error indicator
        return null;
    }
}


function formatNumberWithTwoDecimals(number) {
    // Check if the number has a fractional part
    if (Number.isInteger(number)) {
        return number + ".00"; // Add ".00" when there's no fractional part
    } else {
        return number; // Convert to a string without changes
    }
}


async function filterData(data, ws, username, name) {
    if (Number.isInteger(Number(data))) {
        ws.send(Number(data) + 1);
    }

    if (data.startsWith('41')) {
        await ws.close();

        connectToWebSocket(username, name)
    }

    if (data.startsWith('42["market_state", 1') || data.startsWith()) {
        await ws.close(1000, "market finished");
        console.log(`${name} got closed`);

    }

    if (data.includes('"isClosed":1')) {
        await ws.close(1000, "market finished");
        console.log(`${name} is closed`);
    }

    if (data.startsWith('42["tttv"')) {
        data = data.substring(10);
        data = data.slice(0, -1);
        var result = JSON.parse(data);
        return result;
    }
}


async function connectToWebSocket(username, name) {
    var allCandles = { "1m": [], "5m": [], "15m": [], "30m": [], "1h": [], "4h": [], "1d": [], "1w": [], "1M": [] };

    var redisData = await moveRedisToRam(name.toLowerCase());

    if (redisData != null) {
        // Update allCandles for the specific symbol
        allCandles = redisData;
    }



    return new Promise(resolve => {
        const ws = new WebSocket("wss://msg.nahayatnegar.com/socket.io/?EIO=4&transport=websocket", {
            headers: headers
        });

        ws.on('open', () => {
            console.log(`Connected to WebSocket server for ${username}`);

            const subscriptionMessage = '40';
            ws.send(subscriptionMessage);

            setTimeout(() => {
                const subscriptionMessage3 = `42["subscribe","${username + '0M'}"]`;
                ws.send(subscriptionMessage3);
                resolve(ws); // Resolve the promise after connecting
            }, 2000);
        });

        ws.on('message', async (data) => {
            let result = data.toString('utf-8');
            let candleData = await filterData(result, ws, username, name)
            if (candleData != undefined) {
                var lastVolume = 0;
                var lastTimeStamp = 0;
                const newCandle = {
                    t: candleData.t,
                    T: candleData.t + 60,
                    o: formatNumberWithTwoDecimals(candleData.o),
                    h: formatNumberWithTwoDecimals(candleData.h),
                    l: formatNumberWithTwoDecimals(candleData.l),
                    c: formatNumberWithTwoDecimals(candleData.c),
                    v: candleData.v != undefined ? candleData.v : 1,
                };

                if (allCandles['1m'][0] != undefined) {
                    lastVolume = allCandles['1m'][0].v;
                    lastTimeStamp = allCandles['1m'][0].t;
                }



                const existingCandleIndex = allCandles['1m'].findIndex((candle) => candle.t == newCandle.t);

                if (existingCandleIndex >= 0) {
                    // Update existing candle
                    allCandles['1m'][existingCandleIndex] = newCandle;
                } else {
                    // Add new candle at the beginning
                    allCandles['1m'].unshift(newCandle);

                    if (allCandles['1m'].length >= 2) {


                        if (allCandles["1m"][1] != undefined) {

                            const shouldSaveCandleFirst = {
                                t: allCandles["1m"][0].t,
                                T: allCandles["1m"][0].T,
                                c: allCandles["1m"][0].c,
                                h: allCandles["1m"][0].h,
                                l: allCandles["1m"][0].l,
                                o: allCandles["1m"][0].o,
                                v: allCandles["1m"][0].v,
                            };

                            saveCandleDataToPostgreSQL(name, "1m", shouldSaveCandleFirst);

                            const shouldSaveCandle = {
                                t: allCandles["1m"][1].t,
                                T: allCandles["1m"][1].T,
                                c: allCandles["1m"][1].c,
                                h: allCandles["1m"][1].h,
                                l: allCandles["1m"][1].l,
                                o: allCandles["1m"][1].o,
                                v: allCandles["1m"][1].v,
                            };

                            saveCandleDataToPostgreSQL(name, "1m", shouldSaveCandle);



                            if (allCandles["1m"].length == 3) {
                                // Remove excess candles
                                allCandles["1m"].pop();
                            }
                        }
                    }
                }


                await makeOtherCandles(allCandles, "1m", lastVolume, username, name, lastTimeStamp)
                // console.log(allCandles)
                redis.pipeline().set(`${name.toLowerCase()}`, JSON.stringify(allCandles)).expire(`${name.toLowerCase()}`, 259200).exec();
            }
        });

        ws.on('close', (data) => {
            if (data != 1000) {
                console.log(data);
                console.log(`restarting connection for ${name} `)
                connectToWebSocket(username, name)
            }
        });

        ws.on('error', (error) => {
            console.log(`restarting connection for ${name} `)
            connectToWebSocket(username, name)
        });
    });
}

async function updateSymbols(symbols, serverNumber) {
    try {
        const query = 'SELECT * FROM stock_symbols WHERE server = $1';
        const response = await db.any(query, serverNumber);

        // Initialize an empty object to store key-value pairs

        for (const symbol of response) {
            // Assign each 'username' as a key and 'name' as a value in the 'symbols' object
            symbols[symbol.username.replace(/\n/g, '')] = symbol.name.replace(/\n/g, '');
        }

    } catch (error) {
        // Handle the error, log it, or throw it depending on your needs
        console.error('Error fetching symbols:', error.message);
    }
}


async function startStreams() {
    const chunkSize = 100;
    const symbolsPerDelay = 400;
    const delayDuration = 20 * 1000; // 1 minute in milliseconds
    const symbolChunks = [];

    const symbolEntries = Object.entries(symbols);

    // Divide symbols into chunks
    for (let i = 0; i < symbolEntries.length; i += chunkSize) {
        symbolChunks.push(symbolEntries.slice(i, i + chunkSize));
    }

    // Connect to WebSocket for each chunk
    for (let i = 0; i < symbolChunks.length; i++) {
        const chunk = symbolChunks[i];
        const promises = chunk.map(async ([username, name]) => {

            // Connect to WebSocket
            await connectToWebSocket(username, name);
        });

        await Promise.all(promises);

        // Introduce a delay after every symbolsPerDelay symbols
        if ((i + 1) % (symbolsPerDelay / chunkSize) === 0 && i < symbolChunks.length - 1) {
            console.log(`Waiting for 1 minute...`);
            await new Promise(resolve => setTimeout(resolve, delayDuration));
        }
    }
}

function restartSystem(timeoutId) {
    clearTimeout(timeoutId);

    setTimeout(() => {
        process.exit(1);
    }, 60000);
}


const timeoutId = setTimeout(() => {
    const currentTime = jalalimoment();
    const Hour = jalalimoment(currentTime).startOf('jHour');
    const Minute = jalalimoment(currentTime).startOf('jMinute');

    const currentHour = Hour.format('HH'); // Get Jalali hour
    const currentMinute = Minute.format('mm'); // Get Jalali minute
    if (currentHour == 8 && currentMinute == 33) {
        console.log("restarting system")
        restartSystem(timeoutId)
    }
}, 30000);

(async () => {
    await getData()
    await updateSymbols(symbols, 2);
    console.log("symbols updated successfully")
    await startStreams();
})();




