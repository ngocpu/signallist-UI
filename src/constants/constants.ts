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

export const MessageType = {
  NAVIGATE_TO_NEWS: "NAVIGATE_TO_NEWS",
  NAVIGATE_TO_QUOTE: "NAVIGATE_TO_QUOTE",
  SELECTED_RICS: "SELECTED_RICS",
  SEARCH_RIC: "SEARCH_RIC",
  SEARCH_FUND_RIC: "SEARCH_FUND_RIC",
  NAVIGATE_TO_RESEARCH: "NAVIGATE_TO_RESEARCH",
  WATCHLIST_SELECTED_RIC: "WATCHLIST_SELECTED_RIC",
  IS_SEARCHING: "IS_SEARCHING",
  CODE_SELECTED: "CODE_SELECTED",
  CLEAR_KEYWORD: "CLEAR_KEYWORD",
  STOCK_CHART_WIDGET_HEIGHT: "STOCK_CHART_WIDGET_HEIGHT",
  KEY_RATIOS_WIDGET_HEIGHT: "KEY_RATIOS_WIDGET_HEIGHT",
  INCOME_STATEMENT_WIDGET_HEIGHT: "INCOME_STATEMENT_WIDGET_HEIGHT",
  BALANCE_SHEET_WIDGET_HEIGHT: "BALANCE_SHEET_WIDGET_HEIGHT",
  CASH_FLOW_WIDGET_HEIGHT: "CASH_FLOW_WIDGET_HEIGHT",
  TRADE_SIGNAL_WIDGET_HEIGHT: "TRADE_SIGNAL_WIDGET_HEIGHT",
  SENTIMENT_WIDGET_HEIGHT: "SENTIMENT_WIDGET_HEIGHT",
  NEWS_WIDGET_HEIGHT: "NEWS_WIDGET_HEIGHT",
  COMPANY_PROFILE_WIDGET_HEIGHT: "COMPANY_PROFILE_WIDGET_HEIGHT",
  OWNER_SHIP_SUMMARY_WIDGET_HEIGHT: "OWNER_SHIP_SUMMARY_WIDGET_HEIGHT",
  PEER_COMPARISON_WIDGET_HEIGHT: "PEER_COMPARISON_WIDGET_HEIGHT",
  ESG_SCORE_WIDGET_HEIGHT: "ESG_SCORE_WIDGET_HEIGHT",
  TARGET_PRICE_WIDGET_HEIGHT: "TARGET_PRICE_WIDGET_HEIGHT",
  STOCK_REPORT_WIDGET_HEIGHT: "STOCK_REPORT_WIDGET_HEIGHT",
  BROKER_RATING_WIDGET_HEIGHT: "BROKER_RATING_WIDGET_HEIGHT",
  DIVIDENDS_WIDGET_HEIGHT: "DIVIDENDS_WIDGET_HEIGHT",
  NO_SEARCH_RESULT: "NO_SEARCH_RESULT",
} as const;

export type MessageType = typeof MessageType[keyof typeof MessageType];