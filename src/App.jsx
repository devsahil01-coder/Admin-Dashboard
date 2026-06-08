import React from "react";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <div>
      <Header />
      <div className="flex ">
        <Sidebar  />
        <HomePage  />
      </div>
    </div>
  );
};

export default App;
