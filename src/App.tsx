import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Sobre from "./components/pages/Sobre"
import Home from "./components/pages/Home";
import Footer from "./components/Footer";
import { store } from "./Store";

import { GlobalStyle } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre/:id" element={<Sobre />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  )
}

export default App

