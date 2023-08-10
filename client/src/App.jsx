import React from "react";

import { Navbar, Home, Footer } from "./components";

const App = () => {
  return (
    <div className="bg-black-gradient text-white overflow-hidden">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
