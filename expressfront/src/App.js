import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicePage from "./pages/ServicePage";
import ContactPage from "./pages/ContactPage";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [working, setworking] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:8000")
      .then((res) => setworking(true))
      .catch((err) => setworking(false));
  });

  return (
    <>
      {working === true ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
