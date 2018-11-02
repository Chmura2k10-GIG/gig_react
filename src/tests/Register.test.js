import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);


describe('Register', () => {
    it('Api should return 200 when user data from form are correct', done => {
        mock.onPost('/users', {"user":{"email":"test@test", "password":"test"}}).reply(200);
        done();
    });
    it('Api should return 400 when user data from form are wrong', done => {
        mock.onPost('/users', {"user":{"emailXXX'''":"test@test", "password":"test"}}).reply(400);
        done();
    })
})