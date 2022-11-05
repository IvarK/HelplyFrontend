import Api from "$lib/api";
import sortTickets from "$lib/sort";
import { writable } from "svelte/store";

export const modalTicket = writable<ITicket | null>(null);  

export const modalNotes = writable<INote[]>([]);

export const storeTickets = writable<ITicket[]>([]);

export const ticketColumns = writable<{
  [key in TColumn]: ITicket[];
}>({
  New: [],
  Mine: [],
  "Assigned to others": [],
  Completed: [],
});

storeTickets.subscribe((tickets) => {
  const sortedTickets = sortTickets(tickets);

  ticketColumns.set({
    New: sortedTickets.filter((ticket) => ticket.status === 'new'),
    Mine: sortedTickets.filter(
      (ticket) => ticket.status === 'assigned' && ticket.assigned_to === Api.currentUser
    ),
    'Assigned to others': sortedTickets.filter(
      (ticket) => ticket.status === 'assigned' && ticket.assigned_to !== Api.currentUser
    ),
    Completed: sortedTickets.filter((ticket) => ticket.status === 'completed')
  });
});