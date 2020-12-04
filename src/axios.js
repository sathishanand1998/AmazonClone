import axios from "axios";

const instance = axios.create({
    // THE API (cloud function) URL
    baseURL: 'http://localhost:5001/challenge-e1635/us-central1/api'  // the api url
});
   
export default instance;