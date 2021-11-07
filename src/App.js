import "./index.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { useState, useEffect } from "react";

export default function App() {
  const [isHome, setToHome] = useState(false);
  const logoClick = () => {
    console.log("logo is click");
    setToHome(true);
  };
  useEffect(() => {
    // componentDidMount 寫在這

    return () => {
      // componentWillUnmount 寫在這
      setToHome(false);
    };
  }, [isHome]);
  return (
    <div className="App">
      <Header logoClick={logoClick} />
      <Content isHome={isHome} />
      <Footer />
    </div>
  );
}
