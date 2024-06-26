import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Gallery from "./pages/Gallery";
import SingleService from "./pages/SingleService";
import Footer from "./components/Footer";
import Booking from "./pages/Booking";
import ThankYou from "./pages/ThankYou";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/service/:id" element={<SingleService />} />
        <Route path="/book-appointment" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
