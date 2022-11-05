import axios from "axios";

const apiUrl = 'http://localhost:3000/api';

const Api = {
  getCases: () => {
    return axios.get(`${apiUrl}/cases`);
  }
}

export default Api;