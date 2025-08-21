import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Body from "./components/Body"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { GlobalStyle } from "./styles"
import Sobre from "./components/Sobre"

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Header />

      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App

