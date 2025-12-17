// TradingViewWidget.jsx
import useTradingView from "@/hooks/useTradingView";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  widgetName: string;
  config: object;
}
const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  title,
  widgetName,
  config,
}) => {
  const container = useTradingView(widgetName, config);
  return (
    <div className="tradingview-widget-container" ref={container}>
      {title && <div className="tradingview-widget-title">{title}</div>}
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a
          href="https://www.tradingview.com/markets/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Market summary</span>
        </a>
        <span className="trademark"> by TradingView</span>
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
