import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Landing from "./pages/Landing";
import Departments from "./pages/Departments";
import Server from "./pages/Server";
import Commands from "./pages/Commands";
import FAQ from "./pages/FAQ";
import CAD from "./pages/CAD";
import Resources from "./pages/Resources";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/departments" element={<Departments />} />
            <Route path="/server" element={<Server />} />
            <Route path="/commands" element={<Commands />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/cad" element={<CAD />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}