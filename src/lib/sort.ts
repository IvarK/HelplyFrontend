const ticketSeverityValues: { [K in Severity]: number } = {
  low: 1,
  moderate: 2,
  high: 3
};

const sortTickets = (tickets: ITicket[]): ITicket[] => {
  const sortedTickets = [...tickets];

  sortedTickets.sort((a, b) => {
    if (!b.severity) return -1;
    if (!a.severity) return 1;

    return ticketSeverityValues[b.severity] - ticketSeverityValues[a.severity];
  });

  return sortedTickets;
}

export default sortTickets;