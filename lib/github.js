'use strict';

const assert = require('assert');
const rp = require('request-promise');

module.exports = app => {
  app.addSingleton('github', createClient);
};

function createClient(config, app) {
  assert(config.clientId && config.clientSercret !== 0, '[egg-github] github client and secret key is required');

  const remote = async (opt) => {
    const options = {
      ...opt,
      method: 'get',
    };
    console.log(options);
    if (!options.uri) {
      throw new Error('remote require uri option');
    }
    app.logger.info('request remote server: ', options.uri);
    app.logger.info('Request options:', JSON.stringify(options));
    const result = await rp(options);
    return result;
  };

  const client = {};
  client.queryAccessToken = async (params) => {
    return remote({
      uri: 'https://github.com/login/oauth/access_token',
      qs: params,
    });
  }

  client.queryUserInfo = async (params) => {
    return remote({
      uri: `https://api.github.com/user?${params}`,
      headers: {
        'User-Agent': 'egg-github',
      },
    });
  }

  client.auth = ({ code }) => {
    assert(code, '[egg-github] code is required');
    const access_params = {
      code,
      client_id: config.clientId,
      client_secret: config.client_secret,
    };
    const access_token = await queryAccessToken(access_params);
    const userInfo = await queryUserInfo(access_token);
    return userInfo;
  }

  client.loginUrl = (redirectUrl) => {
    const { clientId } = config;
    const loginUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUrl}`;
    return loginUrl;
  }


  return client;
}
