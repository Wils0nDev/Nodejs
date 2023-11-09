const { getUuId } = require('./patron-adapter/04-get-uuid');
const { getAge } = require('./patron-adapter/03-get-age');
const { httpClientPlugin } = require('./patron-adapter/http-client.plugin');
const buildLogger = require('../plugins/patron-adapter/logger-plugin');

module.exports = {
    getUuId,
    getAge,
    httpClientPlugin,
    buildLogger
}