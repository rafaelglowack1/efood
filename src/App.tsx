import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sobre from "./components/pages/Sobre"
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { GlobalStyle } from "./styles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App

