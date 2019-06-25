# egg-github

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-github.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-github
[travis-image]: https://img.shields.io/travis/luckyscript/egg-github.svg?style=flat-square
[travis-url]: https://travis-ci.org/luckyscript/egg-github
[codecov-image]: https://img.shields.io/codecov/c/github/luckyscript/egg-github.svg?style=flat-square
[codecov-url]: https://codecov.io/github/luckyscript/egg-github?branch=master
[david-image]: https://img.shields.io/david/luckyscript/egg-github.svg?style=flat-square
[david-url]: https://david-dm.org/luckyscript/egg-github
[snyk-image]: https://snyk.io/test/npm/egg-github/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-github
[download-image]: https://img.shields.io/npm/dm/egg-github.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-github

<!--
Description here.
-->

## Install

```bash
$ npm i egg-github --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.github = {
  enable: true,
  package: 'egg-github',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.github = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/luckyscript/egg/issues).

## License

[MIT](LICENSE)
