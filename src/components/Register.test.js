import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import api from "../api";

const params = {
    "user":{
        "email":"test123@gmail.com",
        "password":"haslo123"
    }
}

it('Api should return 200 when user data from form are correct', done => {
    var mock = new MockAdapter(axios);
    const data = {response : "User created successfully"};
    mock.onGet('http://localhost:8080/').reply(200, data);
    api.createUser(params).then(response => {expect(response).toEqual(data);
    done();
    });
});

it('Api should return 428 when user data from form are wrong', done => {
    var mock = new MockAdapter(axios);
    const data = {error: "Bad request"};
    mock.onGet('http://localhost:8080/').reply(401, data);
    api.createUser(params).then(error => {expect(error).toEqual(data);
    done();
    });
});