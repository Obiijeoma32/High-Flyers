import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header";
import HomePage from "./Components/HomePage";
import AboutUs from "./Components/AboutUs";
import Quote from "./Components/Quote";
import Services from "./Components/Services";
import Terms from "./Components/Terms";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/services" element={<Services />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
