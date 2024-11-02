import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Logement from "./pages/Logement/Logement";
import Nav from "./components/nav/Nav";
import PageErreur from "./pages/Erreur/PageErreur";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Nav />
          
          <Routes>
            <Route path="/erreur" element={<PageErreur />} />
            <Route path="/about" element={<About />} />
            <Route path="logement/:id" element={<Logement />} />
            <Route path="/" element={<Home />} />
          </Routes>

        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
