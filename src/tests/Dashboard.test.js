import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

const mock = new MockAdapter(axios);

describe('Dashboard', () => {
    it('Api should return 200 when user data from form are correct', done => {
        mock.onGet('/users', {params:{city: "testKM"}}).reply(200, {
          users:[
            {"id":14,"email":"testkm4@test.pl","firstname":null,"lastname":null,"avatar":null,"age":null,"city":"testKM","login":"testkm4","created_at":"2018-11-06T23:23:32.124Z","updated_at":"2018-11-06T23:23:32.124Z"}
          ]
        });
        done();
    });
    it('Api should return 400 when user data from form are wrong', done => {
        mock.onPost('/users', {"user":{"emailXXX'''":"test@test", "password":"test"}}).reply(400);
        done();
    })
})