export const settingsData = [
  {
    title: "Finansije",
    id: 1,
    children: [
      {
        title: "test1",
        id: 511,
      },
      {
        title: "test2",
        id: 571,
      },
    ],
  },
  {
    title: "Osnovna sredstva",
    id: 2,
    children: [],
  },
  {
    title: "Javne nabavke",
    id: 3,
    children: [],
  },
  {
    title: "Materijalno knjigovodstvo",
    id: 4,
    children: [],
  },
  {
    title: "Ljudski resursi",
    id: 5,
    children: [
      {
        title: "Organizacione jedinice",
        id: 51,
      },
      {
        title: "Pozicije",
        id: 57,
      },
      {
        title: "Kadrovi",
        id: 52,
      },
      {
        title: "Sistematizacija",
        id: 53,
      },
      {
        title: "Sudije",
        id: 54,
        children: [
          {
            title: "Pregled sudija",
            id: 541,
          },
          {
            title: "Odluka o broju",
            id: 542,
          },
        ],
      },
      {
        title: "Oglasi",
        id: 55,
      },
      {
        title: "Preporuke interne revizije",
        id: 56,
      },
    ],
  },
];

export const sidebarData = [
  {
    title: "Finansije",
    id: 1,
    children: [
      {
        title: "test1",
        id: 11,
      },
      {
        title: "test2",
        id: 12,
      },
    ],
  },
  {
    title: "Osnovna sredstva",
    id: 2,
    children: [],
  },
  {
    title: "Javne nabavke",
    id: 3,
    children: [],
  },
  {
    title: "Materijalno knjigovodstvo",
    id: 4,
    children: [],
  },
  {
    title: "Ljudski resursi",
    id: 5,
    children: [
      {
        title: "Organizacione jedinice",
        id: 51,
      },
      {
        title: "Pozicije",
        id: 57,
      },
      {
        title: "Kadrovi",
        id: 52,
      },
      {
        title: "Sistematizacija",
        id: 53,
      },

      {
        title: "Sudije",
        id: 54,
        children: [
          {
            title: "Pregled sudija",
            id: 541,
          },
          {
            title: "Odluka o broju",
            id: 542,
          },
        ],
      },
      {
        title: "Oglasi",
        id: 55,
      },
      {
        title: "Preporuke interne revizije",
        id: 56,
      },
    ],
  },
];

const realSidebardata = [
  {
    id: 1,
    title: "Finansije",
    children: [
      {
        id: 11,
        title: "Budžet",
        children: [],
        route: "/finance/budget",
        parentId: 1,
      },
      {
        id: 12,
        title: "Trenutni budžet",
        children: [],
        route: "/finance/current-budget",
        parentId: 1,
      },
      {
        id: 13,
        title: "Obaveze i potraživanja",
        children: [
          {
            id: 131,
            title: "Unos računa",
            children: [],
            route: "/finance/liabilities-receivables/invoices",
            parentId: 13,
          },
          {
            id: 132,
            title: "Unos rješenja",
            children: [],
            route: "/finance/liabilities-receivables/decisions",
            parentId: 13,
          },
          {
            id: 133,
            title: "Unos ugovora",
            children: [],
            route: "/finance/liabilities-receivables/contracts",
            parentId: 13,
          },
          {
            id: 134,
            title: "Unos zarada",
            children: [],
            route: "/finance/liabilities-receivables/salaries",
            parentId: 13,
          },
          {
            id: 135,
            title: "Vezani troškovi",
            children: [],
            route: "/finance/liabilities-receivables/related-expenses",
            parentId: 13,
          },
        ],
        route: "/finance/liabilities-receivables",
        parentId: 1,
      },
      {
        id: 14,
        title: "Izvještaji",
        children: [],
        route: "/finance/reports",
        parentId: 1,
      },
    ],
    route: "/finance",
    parentId: 0,
  },
  {
    id: 2,
    title: "Osnovna sredstva",
    children: [
      {
        id: 21,
        title: "Pokretna sredstva",
        children: [],
        route: "/inventory/movable-inventory",
        parentId: 2,
      },
      {
        id: 22,
        title: "Nepokretna sredstva",
        children: [],
        route: "/inventory/immovable-inventory",
        parentId: 2,
      },
      {
        id: 23,
        title: "Sitan inventar",
        children: [],
        route: "/inventory/small-inventory",
        parentId: 2,
      },
      {
        id: 24,
        title: "Izvještaji",
        children: [],
        route: "/inventory/reports",
        parentId: 2,
      },
    ],
    route: "/inventory",
    parentId: 0,
  },
  {
    id: 3,
    title: "Javne nabavke",
    children: [
      {
        id: 31,
        title: "Planovi",
        children: [],
        route: "/procurements/plans",
        parentId: 3,
      },
      {
        id: 32,
        title: "Ugovori",
        children: [],
        route: "/procurements/contracts",
        parentId: 3,
      },
      {
        id: 33,
        title: "Izvještaji",
        children: [],
        route: "/procurements/reports",
        parentId: 3,
      },
    ],
    route: "/procurements",
    parentId: 0,
  },
  {
    id: 4,
    title: "Materijalno knjigovodstvo",
    children: [
      {
        id: 41,
        title: "Narudžbenica",
        children: [],
        route: "/accounting/order-form",
        parentId: 4,
      },
      {
        id: 42,
        title: "Ugovori",
        children: [],
        route: "/accounting/contracts",
        parentId: 4,
      },
      {
        id: 43,
        title: "Zalihe robe",
        children: [],
        route: "/accounting/stock",
        parentId: 4,
      },
      {
        id: 44,
        title: "Izvještaji",
        children: [],
        route: "/accounting/reports",
        parentId: 4,
      },
    ],
    route: "/accounting",
    parentId: 0,
  },
  {
    id: 5,
    title: "Ljudski resursi",
    children: [
      {
        id: 51,
        title: "Kadrovi",
        children: [],
        route: "/hr/employees",
        parentId: 5,
      },
      {
        id: 52,
        title: "Sistematizacija",
        children: [],
        route: "/hr/systematization",
        parentId: 5,
      },
      {
        id: 53,
        title: "Sudije",
        children: [
          {
            id: 531,
            title: "Odluka o broju sudija",
            children: [],
            route: "/hr/judges/number-decision",
            parentId: 53,
          },
          {
            id: 532,
            title: "Pregled Sudija i predsjednika",
            children: [],
            route: "/hr/judges/overview-judges-presidents",
            parentId: 53,
          },
        ],
        route: "/hr/judges",
        parentId: 5,
      },
      {
        id: 54,
        title: "Oglasi",
        children: [
          {
            id: 541,
            title: "Pregled svih oglasa",
            children: [],
            route: "/hr/job-tenders/job-tenders-list",
            parentId: 54,
          },
          {
            id: 542,
            title: "Pregled svih kandidata",
            children: [],
            route: "/hr/job-tenders/job-tender-applications",
            parentId: 54,
          },
        ],
        route: "/hr/job-tenders",
        parentId: 5,
      },
      {
        id: 55,
        title: "Preporuke interne revizije",
        children: [],
        route: "/hr/revision-recommendations",
        parentId: 5,
      },
      {
        id: 56,
        title: "Izvještaji",
        children: [],
        route: "/hr/reports",
        parentId: 5,
      },
    ],
    route: "/hr",
    parentId: 0,
  },
];

export const data2 = JSON.parse(JSON.stringify(realSidebardata));
