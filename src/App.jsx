import React from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div>Navbar</div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <div>Footer</div>
    </div>
  );
};

export default App;
