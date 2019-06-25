'use strict';

const mock = require('egg-mock');

describe('test/github.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/github-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, github')
      .expect(200);
  });
});
