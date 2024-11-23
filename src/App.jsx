import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow mb-24 space-y-24 *:scroll-mt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
