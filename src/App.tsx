import "./App.css";
import TradingViewWidget from "./components/TradingViewWidget";
import { Button } from "./components/ui/button";
import { WIDGET_MARKET_OVERVIEW_CONFIG, WIDGET_NAME } from "./constants/widget";

function App() {

  return <div className=""> 
    <Button className="custom-btn bg-linear-to-r from-button-on-sufer-start to-button-on-sufer-end body-m-bold">Click me</Button>
    <section>
      <TradingViewWidget widgetName={WIDGET_NAME.MARKET_OVERVIEW} config={WIDGET_MARKET_OVERVIEW_CONFIG} />
    </section>
  </div>;
}

export default App;
