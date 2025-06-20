import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="About" element={<About />} />
        <Route path="Service" element={<Service />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
