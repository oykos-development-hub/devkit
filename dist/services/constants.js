const FE_MICRO_SERVICES = {
    finance: {
        slug: "finance",
        url: {
            development: "http://localhost:3005",
            staging: "",
            production: "",
        },
    },
    accounting: {
        slug: "accounting",
        url: {
            development: "http://localhost:3004",
            staging: "",
            production: "",
        },
    },
    procurements: {
        slug: "procurements",
        url: {
            development: "http://localhost:3003",
            staging: "",
            production: "",
        },
    },
    inventory: {
        slug: "inventory",
        url: {
            development: "http://localhost:3002",
            staging: "",
            production: "",
        },
    },
    hr: {
        slug: "hr",
        url: {
            development: "http://localhost:3001",
            staging: "",
            production: "",
        },
    },
};
const ROUTES_ID_MAP = {
    1: "/finance",
    2: "/inventory",
    3: "/procurements",
    4: "/accounting",
    5: "/hr",
    51: "/hr/organization-units",
    52: "/hr/employees",
    53: "/hr/systematization",
    54: "/hr/judges",
    541: "/hr/judges/number-decision",
    55: "/hr/job-tenders",
    56: "/hr/revision-recommendations",
    57: "/hr/job-positions",
};
export const Constants = {
    FE_MICRO_SERVICES,
    ROUTES_ID_MAP,
};
//# sourceMappingURL=constants.js.map