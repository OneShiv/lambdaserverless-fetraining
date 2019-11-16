const supertest = require('supertest');
const app = require('./api');

describe('testing apis', () => {
    let request;
    beforeEach(() => {
        request = supertest(app);
    });
    test('should get some todos', (done) => {
        request
            .get('/todo')
            .expect(200)
            .end((err, res) => {
                expect(res.body.length).toEqual(2);
                done();
            })
    })
    test('get root url', (done) => {
        request
            .get('/')
            .expect(200)
            .end(function (err, res) {
                if (err) {
                    return done(err);
                }
                expect(res.body.message).toEqual("ok");
                return done()
            });
    })
});
