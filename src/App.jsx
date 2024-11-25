import Aos from "aos";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import "aos/dist/aos.css";
import { useAuthContext } from "./contexts/AuthContext";

function App() {
  const { isLoading } = useAuthContext();

  useEffect(() => {
    Aos.init({ offset: 50 });
  }, [isLoading]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="relative pb-24 flex-grow space-y-24 *:scroll-mt-28">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
