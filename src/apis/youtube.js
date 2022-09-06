import axios from 'axios';
const KEY = "AIzaSyB4ZYl3nwBFgHZAu7NXbACILTkDpdIpqQ8";

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:
    {
        part: 'snippet',
        maxResults: 50,
        type: 'video',
        key: KEY
    }
});