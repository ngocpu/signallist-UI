import { useEffect, useRef } from "react";

const useTradingView = (scriptName: string, config: object) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const loadWidget = () => {
      if (!container) return;
      const script = document.createElement("script");
      script.src = `${import.meta.env.VITE_BASE_WIDGET_URL}${scriptName}.js`;
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = JSON.stringify(config);
      container.appendChild(script);
    };
    loadWidget();
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [scriptName, config]);
  return containerRef;
};
export default useTradingView;
