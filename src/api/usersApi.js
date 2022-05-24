import axios from 'axios';


const usersApi = axios.create({
    baseURL: 'https://6288dd87abc3b5e327cc0280.endapi.io',
    timeout: 5500
});


export default usersApi;