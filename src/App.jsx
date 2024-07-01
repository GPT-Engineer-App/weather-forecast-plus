import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Forecast from "./pages/Forecast.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/forecast" element={<Forecast />} />
      </Routes>
    </Router>
  );
}

export default App;