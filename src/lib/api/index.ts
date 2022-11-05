import axios from "axios";

const apiUrl = 'http://localhost:3000';

const Api = {
  getTickets: async (): Promise<ITicket[]> => {
    const response = await axios.get(`${apiUrl}/tickets`);
    return response.data;
  }
}

export default Api;