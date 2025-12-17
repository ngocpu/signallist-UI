// TradingViewWidget.jsx
import useTradingView from "@/hooks/useTradingView";
import { cn } from "@/lib/utils";
import React, { memo } from "react";

interface TradingViewWidgetProps {
  title?: string;
  widgetName: string;
  config: object;
  height?: string | number;
  className?: string;
}
const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  title,
  widgetName,
  config,
  height = 600,
  className,
}) => {
  const container = useTradingView(widgetName, config);
  return (
    <div className="w-full">
      {title && (
        <h3 className="font-semibold text-2xl text-gray-100 mb-5">{title}</h3>
      )}
      <div
        className={cn("tradingview-widget-container", className)}
        ref={container}
      >
        <div
          className="tradingview-widget-container__widget"
          style={{ height, width: "100%" }}
        />
      </div>
    </div>
  );
};

export default memo(TradingViewWidget);
