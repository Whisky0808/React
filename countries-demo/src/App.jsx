import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContinentPage from "./pages/ContinentPage";
import CountryPage from "./pages/CountryPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/continent/:code" element={<ContinentPage />} />
        <Route path="/country/:code" element={<CountryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
