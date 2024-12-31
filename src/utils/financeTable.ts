export type TransactionType = {
  account: string;
  first: string;
  email: string;
  balance: string;
  equity: string;
  leverage: string;
  action: string;
}[];

export const transaction: TransactionType = [
  {
    account: "1234567890",
    first: "abhi",
    email: "john.doe@email.com",
    balance: "10,000 USD",
    equity: "15,000 USD",
    leverage: "1:100",
    action: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9602 3.73917L15.3569 2.3325C15.6481 2.03944 16.043 1.87479 16.4548 1.87479C16.8665 1.87479 17.2614 2.03944 17.5526 2.3325C17.8438 2.62556 18.0073 3.02304 18.0073 3.4375C18.0073 3.85196 17.8438 4.24944 17.5526 4.5425L8.76078 13.3917C8.32307 13.832 7.7833 14.1556 7.19019 14.3333L4.9672 15L5.62954 12.7625C5.80612 12.1655 6.12765 11.6222 6.5651 11.1817L13.9602 3.73917ZM13.9602 3.73917L16.1443 5.9375M14.9024 11.6667V15.625C14.9024 16.1223 14.7061 16.5992 14.3568 16.9508C14.0074 17.3025 13.5336 17.5 13.0395 17.5H4.34625C3.85219 17.5 3.37837 17.3025 3.02901 16.9508C2.67966 16.5992 2.4834 16.1223 2.4834 15.625V6.875C2.4834 6.37772 2.67966 5.90081 3.02901 5.54918C3.37837 5.19754 3.85219 5 4.34625 5H8.27892" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
  {
    account: "1234567890",
    first: "abhi",
    email: "john.doe@email.com",
    balance: "10,000 USD",
    equity: "15,000 USD",
    leverage: "1:100",
    action: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9602 3.73917L15.3569 2.3325C15.6481 2.03944 16.043 1.87479 16.4548 1.87479C16.8665 1.87479 17.2614 2.03944 17.5526 2.3325C17.8438 2.62556 18.0073 3.02304 18.0073 3.4375C18.0073 3.85196 17.8438 4.24944 17.5526 4.5425L8.76078 13.3917C8.32307 13.832 7.7833 14.1556 7.19019 14.3333L4.9672 15L5.62954 12.7625C5.80612 12.1655 6.12765 11.6222 6.5651 11.1817L13.9602 3.73917ZM13.9602 3.73917L16.1443 5.9375M14.9024 11.6667V15.625C14.9024 16.1223 14.7061 16.5992 14.3568 16.9508C14.0074 17.3025 13.5336 17.5 13.0395 17.5H4.34625C3.85219 17.5 3.37837 17.3025 3.02901 16.9508C2.67966 16.5992 2.4834 16.1223 2.4834 15.625V6.875C2.4834 6.37772 2.67966 5.90081 3.02901 5.54918C3.37837 5.19754 3.85219 5 4.34625 5H8.27892" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
  {
    account: "1234567890",
    first: "abhi",
    email: "john.doe@email.com",
    balance: "10,000 USD",
    equity: "15,000 USD",
    leverage: "1:100",
    action: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9602 3.73917L15.3569 2.3325C15.6481 2.03944 16.043 1.87479 16.4548 1.87479C16.8665 1.87479 17.2614 2.03944 17.5526 2.3325C17.8438 2.62556 18.0073 3.02304 18.0073 3.4375C18.0073 3.85196 17.8438 4.24944 17.5526 4.5425L8.76078 13.3917C8.32307 13.832 7.7833 14.1556 7.19019 14.3333L4.9672 15L5.62954 12.7625C5.80612 12.1655 6.12765 11.6222 6.5651 11.1817L13.9602 3.73917ZM13.9602 3.73917L16.1443 5.9375M14.9024 11.6667V15.625C14.9024 16.1223 14.7061 16.5992 14.3568 16.9508C14.0074 17.3025 13.5336 17.5 13.0395 17.5H4.34625C3.85219 17.5 3.37837 17.3025 3.02901 16.9508C2.67966 16.5992 2.4834 16.1223 2.4834 15.625V6.875C2.4834 6.37772 2.67966 5.90081 3.02901 5.54918C3.37837 5.19754 3.85219 5 4.34625 5H8.27892" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
`,
  },
];

////////////////////////////////////////////

export type InternalTransactionType = {
  timestamp: string;
  sender_account: string;
  recipient_account: string;
  amount: string;
  status: "pending" | "approved" | "rejected";
}[];

export const internalTransaction: InternalTransactionType = [
  {
    timestamp: "2023-05-30 10:20:06",
    sender_account: "7517775 ( )",
    recipient_account: "7517775 ( )",
    amount: "10",
    status: "approved",
  },
  {
    timestamp: "2023-05-30 10:20:06",
    sender_account: "7517775 ( )",
    recipient_account: "7517775 ( )",
    amount: "10",
    status: "pending",
  },
  {
    timestamp: "2023-05-30 10:20:06",
    sender_account: "7517775 ( )",
    recipient_account: "7517775 ( )",
    amount: "10",
    status: "rejected",
  },
];
