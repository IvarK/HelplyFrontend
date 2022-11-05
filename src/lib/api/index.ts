import axios from "axios";

const apiUrl = 'http://localhost:3000';

const Api = {
  getTickets: async (): Promise<ITicket[]> => {
    const response = await axios.get(`${apiUrl}/tickets`);
    return response.data;
  },

  addTicket: async (ticket: ITicketBody): Promise<ITicket> => {
    const response = await axios.post(`${apiUrl}/tickets`, ticket);
    return response.data;
  },

  updateTicket: async (ticket: Partial<ITicket>): Promise<ITicket> => {
    const response = await axios.patch(`${apiUrl}/tickets/${ticket.id}`, ticket);
    return response.data;
  }
}

export default Api;