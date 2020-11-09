import axios from 'axios';

const instance=axios.create({
    baseURL:'https://its-mine.herokuapp.com/'
})

export default instance;