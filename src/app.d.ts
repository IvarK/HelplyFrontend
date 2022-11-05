// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

type TicketStatus = 'new' | 'assigned' | 'completed';

type Severity = 'high' | 'medium' | 'low';

interface INote {
	id: number;
	author: string;
	text: string;
	created_at: string;
  ticket_id: number;
}
interface ITicket {
  id: number;
  email: string;
  name: string;
  created_at: string;
  status: TicketStatus;
  assigned_to?: string | null;
  reporter?: string;
  reporter_email?: string;
  description: string;
  notes: INote[];
  severity?: Severity;
  reporter_estimate: number;
}

type ITicketBody = Omit<ITicket, 'id' | 'notes'>;

type INoteBody = Omit<INote, 'id' | 'created_at' | 'ticket_id'>;


type TColumn = "New" | "Mine" | "Assigned to others" | "Completed";
