// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

type TicketStatus = 'new' | 'assigned' | 'completed';

type Severity = 'high' | 'medium' | 'low';

interface INote {
	id: string;
	author: string;
	text: string;
	created_at: string;
}
interface ITicket {
  id: number;
  email: string;
  name: string;
  created_at: string;
  status: TicketStatus;
  assigned_to?: string;
  reporter?: string;
  reporter_email?: string;
  description: string;
  notes: INote[];
  severity?: Severity;
  reporter_estimate: number;
}

interface ITicketBody {
  email: string;
  name: string;
  created_at: string;
  status: TicketStatus;
  assigned_to?: string;
  reporter?: string;
  reporter_email?: string;
  description: string;
  reporter_estimate: number;
}


type TColumn = "New" | "Mine" | "Assigned to others" | "Completed";
