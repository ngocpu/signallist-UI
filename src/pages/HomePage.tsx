import TradingViewWidget from "@/components/TradingViewWidget";
import {
  WIDGET_HEAT_MAP_CONFIG,
  WIDGET_MARKET_DATA_CONFIG,
  WIDGET_MARKET_OVERVIEW_CONFIG,
  WIDGET_NAME,
  WIDGET_NEWS_CONFIG,
} from "@/constants/widget";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <div className="container w-full h-full">
      <div className="flex-col md:flex-row flex gap-6">
        <section className="w-full md:w-1/3">
          <TradingViewWidget
            widgetName={WIDGET_NAME.MARKET_OVERVIEW}
            config={WIDGET_MARKET_OVERVIEW_CONFIG}
            className="border-none body-m-regular"
          />
        </section>
        <section className="w-full md:w-2/3">
          <TradingViewWidget
            widgetName={WIDGET_NAME.HEAT_MAP}
            config={WIDGET_HEAT_MAP_CONFIG}
            height={600}
            className="border-none body-m-regular"
          />
        </section>
      </div>
      <div className="flex-col md:flex-row flex gap-6 mt-6">
        <section className="news w-full md:w-1/3">
          <TradingViewWidget
            widgetName={WIDGET_NAME.NEWS}
            config={WIDGET_NEWS_CONFIG}
            className="border-none body-m-regular"
          />
        </section>
        <section className="market-data w-full md:w-2/3">
          <TradingViewWidget
            widgetName={WIDGET_NAME.MARKET_DATA}
            config={WIDGET_MARKET_DATA_CONFIG}
            className="border-none body-m-regular"
          />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
