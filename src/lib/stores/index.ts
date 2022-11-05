import { writable } from "svelte/store";

export const modalTicket = writable<ITicket | null>(null);