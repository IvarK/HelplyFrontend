import axios from "axios";

const apiUrl = 'http://34.88.56.134:8000/';

const Api = {
  currentUser: "Hackathon Demo",

  getTickets: async (): Promise<ITicket[]> => {
    const response = (await axios.get(`${apiUrl}/ticket`));
    return response.data;
  },

  getSingleTicket: async (id: number): Promise<[ITicket, INote[]]> => {
    const response = await axios.get(`${apiUrl}/ticket/${id}`);
    return response.data;
  },

  addTicket: async (ticket: ITicketBody): Promise<ITicket> => {
    const response = await axios.post(`${apiUrl}/ticket`, ticket);
    return response.data;
  },

  updateTicket: async (ticket: Partial<ITicket>): Promise<ITicket> => {
    const response = await axios.patch(`${apiUrl}/ticket/${ticket.id}`, ticket);
    return response.data;
  },

  addNote: async (ticketId: number, note: INoteBody): Promise<INote> => {
    const response = await axios.post(`${apiUrl}/ticket/${ticketId}/note`, note);
    return response.data;
  }
}

export default Api;