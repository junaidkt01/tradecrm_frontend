export type UsersTable = {
  timestamp: string;
  name: string;
  email: string;
  status: boolean;
  settings?: string;
  delete?: string;
}[];

export const users_table_data: UsersTable = [
  {
    timestamp: "2022-01-01 00:00:00",
    name: "John Doe",
    email: "john.doe@example.com",
    status: true,
  },
  {
    timestamp: "2022-01-01 00:00:00",
    name: "John Doe",
    email: "john.doe@example.com",
    status: false,
  },
  {
    timestamp: "2022-01-01 00:00:00",
    name: "John Doe",
    email: "john.doe@example.com",
    status: false,
  },
];
