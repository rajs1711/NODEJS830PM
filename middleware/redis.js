const redis = require('redis');
let redisclient;
(async () => {
    redisclient = redis.createClient({
        url: `redis://127.0.0.1:6379`
    });
    redisclient.on('ready', () => {
        console.log('Redis Client is connected')
    });
    redisclient.on('error', (error) => {
        console.log('Redis Client throw error' + error)
    });
    await redisclient.connect();

})();

const setRedisDataByKey = async (datakey, data) => {
    try {
        await redisclient.set(datakey, JSON.stringify(data), {
            EX: process.env.REDIS_EXPIRE
        });
    } catch (err) {
        console.log(err)
    }
}

const getRedisDataByKey = async (datakey) => {
    try {
        const cachedData = await redisclient.get(datakey);
        if (cachedata) {
            return JSON.parse(cachedData)
        }
        return null
    } catch (err) {
        console.log(err)
    }
}

async function getCachedata(req, res, next) {
    if (req?.headers?.resetcache === 'true') {
        const key = req.url;
        try {
            await redisclient.del(key)
        } catch (err) {
            console.log(err)
        }
        return next();
    }
    const key = req.url;
    let results;
    try {
        const cacheResults = await redisclient.get(key);
        if (cacheResults) {
            results = JSON.parse(cacheResults);
        } else {
            next()
        }
    } catch (err) {
        res.status(404)
    }
}

async function setCacheData(req, result) {
    const key = req.url;
    try {
        await redisclient.set(key, JSON.stringify(result), {
            EX: process.env.REDIS_EXPIRE
        })
    } catch (err) {
        res.send(404);
    }
}

module.exports = {
    setRedisDataByKey,
    getRedisDataByKey,
    redisclient,
    setCacheData,
    getCachedata
}