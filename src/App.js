import "./App.css";
import Home from "./pages/Home";
import Vendor from "./pages/VendorPage";
import Navbar from "./components/Navbar";
import Password from "./pages/password";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{display: "flex"}}>
      <div>
        <Navbar />
      </div>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vendor" element={<Vendor />} />
            <Route path="/password" element={<Password />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
