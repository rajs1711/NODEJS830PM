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

module.exports = {
    setRedisDataByKey,
    getRedisDataByKey,
    redisclient
}