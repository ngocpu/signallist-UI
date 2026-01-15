import { MessageType } from "@/constants/constants";
import { useEffect, useRef } from "react";


const CompanyProfileWidget = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const WIDGET_ORIGIN = "https://t1widgetlib.trkd-hs.com";

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
        if (event.origin !== WIDGET_ORIGIN) return;

        const { type, payload } = event.data || {};
        console.log("type", type, payload);

        if (type === MessageType.OWNER_SHIP_SUMMARY_WIDGET_HEIGHT && iframeRef.current) {
          const height = payload?.height;

          if (height && height > 0) {
            iframeRef.current.style.height = `${height}px`;
          }
        }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <iframe
        ref={iframeRef}
        title="company-profile"
        src="https://t1widgetlib.trkd-hs.com/widgetlibrary_IG/s360/ownership/01?widgetBorder=1&quoteHeader=1&widgetHeader=1&widgetPaddingTop=16&widgetPaddingRight=24&widgetPaddingBottom=36&widgetPaddingLeft=24&locale=en-GB&theme=light&language=en&ric=TSLA.TG&token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImlnQGxhYmNpIiwiaWF0IjoxNzY4MzYxMDY4LCJleHAiOjE3Njg0NDc0NjgsImF1ZCI6ImxhYmNpIiwiaXNzIjoiZXR3ZWJhcGkifQ.EIXq7t_nJ_71sUT-EBm41kncucFS4oA2GmWoxxQyxTo" // URL của bạn
        style={{
          width: "100%",
          border: 0,
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default CompanyProfileWidget;
