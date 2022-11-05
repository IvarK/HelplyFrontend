import { writable } from "svelte/store";

export const modalTicket = writable<ITicket | null>(null);

export const ticketColumns = writable<{
  [key in TColumn]: ITicket[];
}>({
  New: [],
  Mine: [],
  "Assigned to others": [],
  Completed: [],
});