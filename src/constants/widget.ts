export const WIDGET_NAME = {
  MARKET_OVERVIEW: "market-overview",
  HEAT_MAP: "stock-heatmap",
  NEWS: "timeline",
  MARKET_DATA: "market-quotes",
};
export const WIDGET_MARKET_OVERVIEW_CONFIG = {
  colorTheme: "dark",
  dateRange: "12M",
  locale: "en",
  largeChartUrl: "",
  isTransparent: false,
  showFloatingTooltip: false,
  plotLineColorGrowing: "rgba(41, 98, 255, 1)",
  plotLineColorFalling: "rgba(41, 98, 255, 1)",
  gridLineColor: "rgba(240, 243, 250, 0)",
  scaleFontColor: "#DBDBDB",
  belowLineFillColorGrowing: "rgba(41, 98, 255, 0.12)",
  belowLineFillColorFalling: "rgba(41, 98, 255, 0.12)",
  belowLineFillColorGrowingBottom: "rgba(41, 98, 255, 0)",
  belowLineFillColorFallingBottom: "rgba(41, 98, 255, 0)",
  symbolActiveColor: "rgba(41, 98, 255, 0.12)",
  tabs: [
    {
      title: "Indices",
      symbols: [
        {
          s: "FOREXCOM:SPXUSD",
          d: "S&P 500 Index",
        },
        {
          s: "FOREXCOM:NSXUSD",
          d: "US 100 Cash CFD",
        },
        {
          s: "FOREXCOM:DJI",
          d: "Dow Jones Industrial Average Index",
        },
        {
          s: "INDEX:NKY",
          d: "Japan 225",
        },
        {
          s: "INDEX:DEU40",
          d: "DAX Index",
        },
        {
          s: "FOREXCOM:UKXGBP",
          d: "FTSE 100 Index",
        },
      ],
      originalTitle: "Indices",
    },
    {
      title: "Futures",
      symbols: [
        {
          s: "BMFBOVESPA:ISP1!",
          d: "S&P 500",
        },
        {
          s: "BMFBOVESPA:EUR1!",
          d: "Euro",
        },
        {
          s: "CMCMARKETS:GOLD",
          d: "Gold",
        },
        {
          s: "PYTH:WTI3!",
          d: "WTI Crude Oil",
        },
        {
          s: "BMFBOVESPA:CCM1!",
          d: "Corn",
        },
      ],
      originalTitle: "Futures",
    },
    {
      title: "Bonds",
      symbols: [
        {
          s: "EUREX:FGBL1!",
          d: "Euro Bund",
        },
        {
          s: "EUREX:FBTP1!",
          d: "Euro BTP",
        },
        {
          s: "EUREX:FGBM1!",
          d: "Euro BOBL",
        },
      ],
      originalTitle: "Bonds",
    },
    {
      title: "Forex",
      symbols: [
        {
          s: "FX:EURUSD",
          d: "EUR to USD",
        },
        {
          s: "FX:GBPUSD",
          d: "GBP to USD",
        },
        {
          s: "FX:USDJPY",
          d: "USD to JPY",
        },
        {
          s: "FX:USDCHF",
          d: "USD to CHF",
        },
        {
          s: "FX:AUDUSD",
          d: "AUD to USD",
        },
        {
          s: "FX:USDCAD",
          d: "USD to CAD",
        },
      ],
      originalTitle: "Forex",
    },
  ],
  support_host: "https://www.tradingview.com",
  backgroundColor: "#0f0f0f",
  width: "100%",
  height: 600,
  showSymbolLogo: true,
  showChart: true,
};
export const WIDGET_HEAT_MAP_CONFIG = {
  dataSource: "SPX500",
  blockSize: "market_cap_basic",
  blockColor: "change",
  grouping: "sector",
  locale: "en",
  symbolUrl: "",
  colorTheme: "dark",
  exchanges: [],
  hasTopBar: false,
  isDataSetEnabled: false,
  isZoomEnabled: true,
  hasSymbolTooltip: true,
  isMonoSize: false,
  width: "100%",
  height: 600,
};
export const WIDGET_NEWS_CONFIG = {
  displayMode: "regular",
  feedMode: "all_symbols",
  colorTheme: "dark",
  isTransparent: false,
  locale: "en",
  width: "100%",
  height: 600,
};
export const WIDGET_MARKET_DATA_CONFIG = {
  colorTheme: "dark",
  locale: "en",
  largeChartUrl: "",
  isTransparent: false,
  showSymbolLogo: true,
  backgroundColor: "#0F0F0F",
  support_host: "https://www.tradingview.com",
  width: "100%",
  height: 600,
  symbolsGroups: [
    {
      name: "Indices",
      symbols: [
        {
          name: "FOREXCOM:SPXUSD",
          displayName: "S&P 500 Index",
        },
        {
          name: "FOREXCOM:NSXUSD",
          displayName: "US 100 Cash CFD",
        },
        {
          name: "FOREXCOM:DJI",
          displayName: "Dow Jones Industrial Average Index",
        },
        {
          name: "INDEX:NKY",
          displayName: "Japan 225",
        },
        {
          name: "INDEX:DEU40",
          displayName: "DAX Index",
        },
        {
          name: "FOREXCOM:UKXGBP",
          displayName: "FTSE 100 Index",
        },
      ],
    },
    {
      name: "Futures",
      symbols: [
        {
          name: "BMFBOVESPA:ISP1!",
          displayName: "S&P 500",
        },
        {
          name: "BMFBOVESPA:EUR1!",
          displayName: "Euro",
        },
        {
          name: "CMCMARKETS:GOLD",
          displayName: "Gold",
        },
        {
          name: "PYTH:WTI3!",
          displayName: "WTI Crude Oil",
        },
        {
          name: "BMFBOVESPA:CCM1!",
          displayName: "Corn",
        },
      ],
    },
    {
      name: "Bonds",
      symbols: [
        {
          name: "EUREX:FGBL1!",
          displayName: "Euro Bund",
        },
        {
          name: "EUREX:FBTP1!",
          displayName: "Euro BTP",
        },
        {
          name: "EUREX:FGBM1!",
          displayName: "Euro BOBL",
        },
      ],
    },
    {
      name: "Forex",
      symbols: [
        {
          name: "FX:EURUSD",
          displayName: "EUR to USD",
        },
        {
          name: "FX:GBPUSD",
          displayName: "GBP to USD",
        },
        {
          name: "FX:USDJPY",
          displayName: "USD to JPY",
        },
        {
          name: "FX:USDCHF",
          displayName: "USD to CHF",
        },
        {
          name: "FX:AUDUSD",
          displayName: "AUD to USD",
        },
        {
          name: "FX:USDCAD",
          displayName: "USD to CAD",
        },
      ],
    },
  ],
};
