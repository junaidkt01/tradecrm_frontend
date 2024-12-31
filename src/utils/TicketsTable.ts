export type TicketsType = {
  ticket_id: number;
  created_at: string;
  subject: string;
  created_by: string;
  priority: string;
  view_details?: string;
  close_ticket?: string;
}[];

export const openTicketsTable: TicketsType = [
  {
    ticket_id: 1,
    created_at: "Jul 7, 2023",
    subject: "Ticket 1",
    created_by: "John Doe",
    priority: "(C)",
  },
];

export const closeTicketsTable: TicketsType = [
  {
    ticket_id: 2,
    created_at: "Jul 7, 2023",
    subject: "Ticket 1",
    created_by: "John Doe",
    priority: "(C)",
  },
];

export const tickets = [
  {
    ticket_id: 2,
    create_at: "Jul 7, 2023",
    subject: "Ticket 1",
    created_by: "John Doe",
    priority: "Minor",
    department: "",
    query_type: "Enquiry",
    message: "Message 1",
    status: "open",
    ticket_comments: [
      {
        id: 1,
        user_id: 2,
        ticket_id: 2,
        comment: "Comment 1",
        created_by: "John Doe",
        create_at: "Jul 7, 2023",
      },
      {
        id: 2,
        user_id: 3,
        ticket_id: 2,
        comment: "Comment 2",
        created_by: "Vishnu",
        create_at: "Jul 7, 2023",
      },
    ],
  },
];

// export const ticket_comments = [

// ]
