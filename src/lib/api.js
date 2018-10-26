import axios from 'axios';

const url = "http://localhost:8080/";

class Api{
    constructor(){
        this.api = axios.create({
            baseURL: url
        });
    }

    setHeaders(){
        this.api.defaults.headers = {
            'Content-Type': 'application/json'
        };
    }
    
    postLogin(userData){
        this.setHeaders();
        this.api.post('users/login', userData).then(res => console.log);
    }
}

export default Api;