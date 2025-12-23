import { ROUTER_PATH } from "@/constants/router";
import auFlag from "@/assets/flags/au.svg";
import usFlag from "@/assets/flags/us.svg";
import vnFlag from "@/assets/flags/vn.svg";

export const SIGNAL_NAVIGATION_LIST = [
    {
        id: 1,
        name: "Dashboard",
        path: ROUTER_PATH.DASH_BOARD,
    },
    {
        id: 2,
        name: "Search",
        path: ROUTER_PATH.SEARCH,   
    },
    {
        id:3,
        name: "Watchlist",
        path: ROUTER_PATH.WATCHLIST,
    },
    {
        id:4,
        name: 'News',
        path: ROUTER_PATH.NEWS,
    }
]

export const COUNTRY_SELECT = [
    { value: "AU", label: "Australia", flag: auFlag },
    { value: "US", label: "United States", flag: usFlag },
    { value: "VN", label: "Vietnam", flag: vnFlag },
];

export const INVESTMENT_GOALS = [
    { value: "growth", label: "Growth" },
    { value: "income", label: "Income" },
    { value: "conservative", label: "Conservative" },
];

export const RISK_TOLERANCE = [
    { value: "low", label: "Low" },
    { value: "medium", label: "Medium" },
    { value: "high", label: "High" },
];

export const INDUSTRY_SELECT = [
    { value: "tech", label: "Technology" },
    { value: "finance", label: "Finance" },
    { value: "health", label: "Healthcare" },
];

