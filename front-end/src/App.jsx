import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Offerings from "./pages/Offerings.jsx";
import { ToastContainer } from "react-toastify";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/home" replace={true} state={{ from: "/" }} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/offerings" element={<Offerings />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
