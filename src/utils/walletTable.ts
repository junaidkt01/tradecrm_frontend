export type WalletLedgerType = {
  timestamp: number;
  reference: "Deposit" | "Withdraw";
  name: string;
  email: string;
  usd: string;
  source: string;
  status: "pending" | "approved" | "rejected";
  remark: string[];
}[];

export const WalletLedger: WalletLedgerType = [
  {
    timestamp: 1234567890,
    reference: "Withdraw",
    name: "Test ib",
    email: "user@marketwicks.com",
    usd: "100$",
    source: "Default",
    status: "pending",
    remark: [
      `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#F1F1FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9855 9H17.9995C18.5299 9 19.0386 9.21071 19.4137 9.58579C19.7888 9.96086 19.9995 10.4696 19.9995 11V17C19.9996 17.4435 19.8523 17.8744 19.5808 18.2251C19.3093 18.5757 18.9289 18.8261 18.4995 18.937V13C18.4995 12.337 18.2361 11.7011 17.7673 11.2322C17.2984 10.7634 16.6625 10.5 15.9995 10.5H10.0625C10.1734 10.0706 10.4238 9.69024 10.7744 9.41871C11.1251 9.14718 11.556 8.99989 11.9995 9H12.0135C12.075 8.44999 12.337 7.94194 12.7495 7.57297C13.162 7.20401 13.6961 7.00002 14.2495 7H15.7495C16.3029 7.00002 16.837 7.20401 17.2495 7.57297C17.662 7.94194 17.924 8.44999 17.9855 9ZM16.4995 10V9.25C16.4995 9.05109 16.4205 8.86032 16.2798 8.71967C16.1392 8.57902 15.9484 8.5 15.7495 8.5H14.2495C14.0506 8.5 13.8598 8.57902 13.7192 8.71967C13.5785 8.86032 13.4995 9.05109 13.4995 9.25V10H16.4995Z" fill="#1E1F24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13V20C8 20.2652 8.10536 20.5196 8.29289 20.7071C8.48043 20.8946 8.73478 21 9 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12H9ZM10.75 14.5C10.5511 14.5 10.3603 14.579 10.2197 14.7197C10.079 14.8603 10 15.0511 10 15.25C10 15.4489 10.079 15.6397 10.2197 15.7803C10.3603 15.921 10.5511 16 10.75 16H14.25C14.4489 16 14.6397 15.921 14.7803 15.7803C14.921 15.6397 15 15.4489 15 15.25C15 15.0511 14.921 14.8603 14.7803 14.7197C14.6397 14.579 14.4489 14.5 14.25 14.5H10.75ZM10 17.75C10 17.5511 10.079 17.3603 10.2197 17.2197C10.3603 17.079 10.5511 17 10.75 17H14.25C14.4489 17 14.6397 17.079 14.7803 17.2197C14.921 17.3603 15 17.5511 15 17.75C15 17.9489 14.921 18.1397 14.7803 18.2803C14.6397 18.421 14.4489 18.5 14.25 18.5H10.75C10.5511 18.5 10.3603 18.421 10.2197 18.2803C10.079 18.1397 10 17.9489 10 17.75Z" fill="#1E1F24"/>
</svg>
`,
      `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#F1F1FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10ZM18.5 15.707C18.5 15.5746 18.4475 15.4477 18.354 15.354L17.354 14.354C17.3076 14.3074 17.2524 14.2705 17.1916 14.2453C17.1309 14.2201 17.0658 14.2071 17 14.2071C16.9342 14.2071 16.8691 14.2201 16.8084 14.2453C16.7476 14.2705 16.6924 14.3074 16.646 14.354L15.354 15.646C15.3076 15.6926 15.2524 15.7295 15.1916 15.7547C15.1309 15.7799 15.0658 15.7929 15 15.7929C14.9342 15.7929 14.8691 15.7799 14.8084 15.7547C14.7476 15.7295 14.6924 15.6926 14.646 15.646L12.354 13.354C12.3076 13.3074 12.2524 13.2705 12.1916 13.2453C12.1309 13.2201 12.0658 13.2071 12 13.2071C11.9342 13.2071 11.8691 13.2201 11.8084 13.2453C11.7476 13.2705 11.6924 13.3074 11.646 13.354L9.646 15.354C9.55253 15.4477 9.50003 15.5746 9.5 15.707V18C9.5 18.1326 9.55268 18.2598 9.64645 18.3536C9.74021 18.4473 9.86739 18.5 10 18.5H18C18.1326 18.5 18.2598 18.4473 18.3536 18.3536C18.4473 18.2598 18.5 18.1326 18.5 18V15.707ZM18 11C18 11.2652 17.8946 11.5196 17.7071 11.7071C17.5196 11.8946 17.2652 12 17 12C16.7348 12 16.4804 11.8946 16.2929 11.7071C16.1054 11.5196 16 11.2652 16 11C16 10.7348 16.1054 10.4804 16.2929 10.2929C16.4804 10.1054 16.7348 10 17 10C17.2652 10 17.5196 10.1054 17.7071 10.2929C17.8946 10.4804 18 10.7348 18 11Z" fill="#1E1F24"/>
</svg>

`,
    ],
  },
  {
    timestamp: 1234567890,
    reference: "Deposit",
    name: "Test ib",
    email: "user@marketwicks.com",
    usd: "100$",
    source: "Default",
    status: "pending",
    remark: [
      `<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14" cy="14" r="14" fill="#F1F1FF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9855 9H17.9995C18.5299 9 19.0386 9.21071 19.4137 9.58579C19.7888 9.96086 19.9995 10.4696 19.9995 11V17C19.9996 17.4435 19.8523 17.8744 19.5808 18.2251C19.3093 18.5757 18.9289 18.8261 18.4995 18.937V13C18.4995 12.337 18.2361 11.7011 17.7673 11.2322C17.2984 10.7634 16.6625 10.5 15.9995 10.5H10.0625C10.1734 10.0706 10.4238 9.69024 10.7744 9.41871C11.1251 9.14718 11.556 8.99989 11.9995 9H12.0135C12.075 8.44999 12.337 7.94194 12.7495 7.57297C13.162 7.20401 13.6961 7.00002 14.2495 7H15.7495C16.3029 7.00002 16.837 7.20401 17.2495 7.57297C17.662 7.94194 17.924 8.44999 17.9855 9ZM16.4995 10V9.25C16.4995 9.05109 16.4205 8.86032 16.2798 8.71967C16.1392 8.57902 15.9484 8.5 15.7495 8.5H14.2495C14.0506 8.5 13.8598 8.57902 13.7192 8.71967C13.5785 8.86032 13.4995 9.05109 13.4995 9.25V10H16.4995Z" fill="#1E1F24"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 12C8.73478 12 8.48043 12.1054 8.29289 12.2929C8.10536 12.4804 8 12.7348 8 13V20C8 20.2652 8.10536 20.5196 8.29289 20.7071C8.48043 20.8946 8.73478 21 9 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V13C17 12.7348 16.8946 12.4804 16.7071 12.2929C16.5196 12.1054 16.2652 12 16 12H9ZM10.75 14.5C10.5511 14.5 10.3603 14.579 10.2197 14.7197C10.079 14.8603 10 15.0511 10 15.25C10 15.4489 10.079 15.6397 10.2197 15.7803C10.3603 15.921 10.5511 16 10.75 16H14.25C14.4489 16 14.6397 15.921 14.7803 15.7803C14.921 15.6397 15 15.4489 15 15.25C15 15.0511 14.921 14.8603 14.7803 14.7197C14.6397 14.579 14.4489 14.5 14.25 14.5H10.75ZM10 17.75C10 17.5511 10.079 17.3603 10.2197 17.2197C10.3603 17.079 10.5511 17 10.75 17H14.25C14.4489 17 14.6397 17.079 14.7803 17.2197C14.921 17.3603 15 17.5511 15 17.75C15 17.9489 14.921 18.1397 14.7803 18.2803C14.6397 18.421 14.4489 18.5 14.25 18.5H10.75C10.5511 18.5 10.3603 18.421 10.2197 18.2803C10.079 18.1397 10 17.9489 10 17.75Z" fill="#1E1F24"/>
</svg>
`,
    ],
  },
];

export type WalletProfileDataType = {
  name: string;
  email: string;
  balance: string;
  action: string;
}[];

export const WalletProfileData: WalletProfileDataType = [
  {
    name: "Junaid",
    email: "user@marketwicks.com",
    balance: "100$",
    action: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0901 3.73913L15.4868 2.33246C15.778 2.0394 16.1729 1.87476 16.5846 1.87476C16.9964 1.87476 17.3913 2.0394 17.6825 2.33246C17.9736 2.62553 18.1372 3.02301 18.1372 3.43746C18.1372 3.85192 17.9736 4.2494 17.6825 4.54246L8.89066 13.3916C8.45296 13.8319 7.91318 14.1556 7.32008 14.3333L5.09708 15L5.75942 12.7625C5.936 12.1655 6.25754 11.6222 6.69499 11.1816L14.0901 3.73913ZM14.0901 3.73913L16.2742 5.93746M15.0323 11.6666V15.625C15.0323 16.1222 14.836 16.5992 14.4866 16.9508C14.1373 17.3024 13.6635 17.5 13.1694 17.5H4.47613C3.98207 17.5 3.50825 17.3024 3.1589 16.9508C2.80954 16.5992 2.61328 16.1222 2.61328 15.625V6.87496C2.61328 6.37768 2.80954 5.90077 3.1589 5.54914C3.50825 5.19751 3.98207 4.99996 4.47613 4.99996H8.40881" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  },
  {
    name: "Junaid",
    email: "user@marketwicks.com",
    balance: "100$",
    action: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0901 3.73913L15.4868 2.33246C15.778 2.0394 16.1729 1.87476 16.5846 1.87476C16.9964 1.87476 17.3913 2.0394 17.6825 2.33246C17.9736 2.62553 18.1372 3.02301 18.1372 3.43746C18.1372 3.85192 17.9736 4.2494 17.6825 4.54246L8.89066 13.3916C8.45296 13.8319 7.91318 14.1556 7.32008 14.3333L5.09708 15L5.75942 12.7625C5.936 12.1655 6.25754 11.6222 6.69499 11.1816L14.0901 3.73913ZM14.0901 3.73913L16.2742 5.93746M15.0323 11.6666V15.625C15.0323 16.1222 14.836 16.5992 14.4866 16.9508C14.1373 17.3024 13.6635 17.5 13.1694 17.5H4.47613C3.98207 17.5 3.50825 17.3024 3.1589 16.9508C2.80954 16.5992 2.61328 16.1222 2.61328 15.625V6.87496C2.61328 6.37768 2.80954 5.90077 3.1589 5.54914C3.50825 5.19751 3.98207 4.99996 4.47613 4.99996H8.40881" stroke="#62636C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`,
  },
];

export type WalletTransferDataType = {
  timestamp: string;
  sender: string;
  recipient: string;
  amount: string;
  status: "pending" | "approved" | "rejected";
}[];

export const WalletTransferData: WalletTransferDataType = [
  {
    timestamp: "2023-05-30 10:20:06",
    sender: "7517775 ( )",
    recipient: "7517778 ( )",
    amount: "10",
    status: "pending",
  },
  {
    timestamp: "2023-05-30 10:20:06",
    sender: "7517775 ( )",
    recipient: "7517778 ( )",
    amount: "10",
    status: "approved",
  },
  {
    timestamp: "2023-05-30 10:20:06",
    sender: "7517775 ( )",
    recipient: "7517778 ( )",
    amount: "10",
    status: "rejected",
  },
];