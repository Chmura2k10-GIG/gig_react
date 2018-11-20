import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { shallow } from 'enzyme';
import UserProfile from '../containers/UserProfile';
import NavbarComponent from '../components/NavbarComponent';
import React from 'react';
import { createStore } from 'redux';

const mock = new MockAdapter(axios);
describe('UserProfile', () => {
    let appWrapper;
    let appInstance;
    const userProfile = () => {shallow(<UserProfile/>);}
    it('Api should return 200 when instrument data is correct', done => {
        mock.onGet('/instruments', {params:{"name":"Drums"}}).reply(200);
        done();
    });
    it('Api should return 400 when instrument data is incorrect', done => {
      mock.onGet('/instruments', {params:{"nameXXXE":"Drums"}}).reply(400);
      done();
  });

    beforeEach(() => {
        appWrapper = userProfile();
        //appInstance = appWrapper.instance();
    });

    afterEach(() => {
        appWrapper = undefined;
        //appInstance = undefined;
    });

    it('renders <NavbarComponent />', () => {
        expect(appWrapper.find(NavbarComponent).length).toBe(1);
    });

}) 