import React, { useState } from "react";
import BottomNav from "./components/BottomNav";
import TopNav from "./components/TopNav";
import Home from "./pages/Home";

function App() {
  const [menuCollapsed, setMenuCollapsedstate] = useState(0);

  function handleMenuClick() {
    console.log("handleMenuClick:", menuCollapsed);
    if (menuCollapsed !== 0) {
      setMenuCollapsedstate(0);
      return;
    }
    if (menuCollapsed === 0) {
      setMenuCollapsedstate("100%");
      return;
    }
  }

  // console.log("APP RENDER");
  return (
    <div className="App">
      <TopNav menuClick={handleMenuClick} menuCollapsed={menuCollapsed} />
      <BottomNav />
      <Home/>
    </div>
  );
}

export default App;
