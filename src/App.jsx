import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from "./pages/Index";
import SingleMeal from "./pages/SingleMeal";


export default function App() {

  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index/>} />
      <Route path="/meal/:id" element={<SingleMeal/>} />
    </Routes>
  </BrowserRouter>
}
