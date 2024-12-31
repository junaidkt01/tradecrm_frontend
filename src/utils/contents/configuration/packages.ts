export type Packages = {
  title: string;
  type: "live" | "demo";
  max_leverage: string;
  manager_group: string;
  plan_flow: string;
  created_on: string;
};

export const packages: Packages[] = [
  {
    title: "package1",
    type: "live",
    max_leverage: "1:400",
    manager_group: "IB_Demo_PL",
    plan_flow: "Verify Profile",
    created_on: "Sep 16, 2024",
  },
  {
    title: "package2",
    type: "demo",
    max_leverage: "1:400",
    manager_group: "IB_Demo_PL",
    plan_flow: "Verify Profile",
    created_on: "Sep 16, 2024",
  },
];
