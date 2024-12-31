// IB Page tables

// IB And Sub-IB
export type IbAndSubibType = {
  name: string;
  email: string;
  commission_plan: string;
  timestamp: string;
  settings: string;
}[];

export const IbAndSubibData: IbAndSubibType = [
  {
    name: "krishna kushawaha",
    email: "server@example.com",
    commission_plan: "",
    timestamp: "2024-12-16",
    settings: "",
  },
];

export const sample = [
  {
    id: 8,
    name: "John",
    email: "john.doe@example.com",
    commission_plan: "",
    create_at: "2024-12-16",
    subIb: [],
  },
  {
    id: 10,
    name: "John",
    email: "john.doe@example.com",
    commission_plan: "Basic",
    create_at: "2024-12-16",
    subIb: [
      {
        id: 14,
        name: "John",
        email: "john.doe@example.com",
        commission_plan: null,
        create_at: "2024-12-16",
        subIb: [],
      },
      {
        id: 11,
        name: "John",
        email: "john.doe@example.com",
        commission_plan: "Premium",
        create_at: "2024-12-16",
        subIb: [
          {
            id: 12,
            name: "junaid",
            email: "junaidktkmn@gmail.com",
            commission_plan: null,
            create_at: "2024-12-16",
          },
        ],
      },
    ],
  },
  {
    id: 15,
    name: "New",
    email: "new.user@example.com",
    commission_plan: "",
    create_at: "2024-12-16",
    subIb: [],
  },
  {
    id: 16,
    name: "New",
    email: "new.user@example.com",
    commission_plan: "",
    create_at: "2024-12-16",
    subIb: [],
  },
  {
    id: 17,
    name: "New",
    email: "new.user@example.com",
    commission_plan: "",
    create_at: "2024-12-16",
    subIb: [],
  },
];

export const IbAndSubibDataSample: any = [
  {
    name: "krishna kushawaha",
    email: "server@example.com",
    commission_plan: "",
    timestamp: "2024-12-16",
    settings: "",
    subIb: [
      {
        name: "krishna kushawaha",
        email: "server@example.com",
        commission_plan: "",
        timestamp: "2024-12-16",
        settings: "",
        subIb: [
          {
            name: "krishna kushawaha",
            email: "server@example.com",
            commission_plan: "",
            timestamp: "2024-12-16",
            settings: "",
          },
        ],
      },
    ],
  },
];

// Commission Package
export type CommissionPackageType = {
  package: string;
  brokerage: number;
  sharing: number;
  fee_sharing: number;
  direct: number;
  Actions: string;
}[];

export const commissionPackage: CommissionPackageType = [
  {
    package: "BasicIN",
    brokerage: 10,
    sharing: 0,
    fee_sharing: 0,
    direct: 0,
    Actions: "",
  },
  {
    package: "Live",
    brokerage: 10,
    sharing: 0,
    fee_sharing: 0,
    direct: 0,
    Actions: "",
  },
];

// comisn Ovrl
export type IBcomisnOvrlType = {
  name: string;
  email: string;
  commission: number;
  withdraw: number;
  deposit: number;
  investment: number;
  last_update: string;
}[];

export const iBcomisnOvrl: IBcomisnOvrlType = [
  {
    name: "krishna kushawaha",
    email: "krishna@company.com",
    commission: 0,
    withdraw: 0,
    deposit: 0,
    investment: 0,
    last_update: "",
  },
];

// dly Comisn
export type IBdlyComisnType = {
  timestamp: string;
  commission: number;
  withdraw: number;
  deposit: number;
  investment: number;
  view: string;
}[];

export const iBdlyComisn: IBdlyComisnType = [
  {
    timestamp: "2024-12-16",
    commission: 0,
    withdraw: 0,
    deposit: 0,
    investment: 0,
    view: "",
  },
];

// Comisn Trnsctn
export type IBComisnTrnsctnType = {
  timestamp: string;
  amount: number;
  name: number;
  refer: number;
}[];

export const iBComisnTrnsctn: IBComisnTrnsctnType = [
  {
    timestamp: "2024-12-16",
    amount: 0,
    name: 0,
    refer: 0,
  },
];
