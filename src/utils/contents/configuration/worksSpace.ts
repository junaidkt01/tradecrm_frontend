export type Workspace = {
  id: number;
  title: string;
  works_space_name: string;
  works_space_id: number;
  permissions: string[];
};

export const workspace: Workspace[] = [
  {
    id: 1,
    title: "#Workspace1",
    works_space_name: "Default",
    works_space_id: 108,
    permissions: ["Traders Room", "Pertner Area"],
  },
  {
    id: 1,
    title: "#Workspace2",
    works_space_name: "Default",
    works_space_id: 108,
    permissions: ["Traders Room", "Pertner Area"],
  },
];
