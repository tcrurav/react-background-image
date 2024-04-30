import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Other from "./pages/other/Other";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/other" element={<Other />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
