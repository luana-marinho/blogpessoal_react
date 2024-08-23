import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"


function App() {
  // Código TypeScript
  

  return (
    // Código TSX => HTML
    <>
    <BrowserRouter>
    <Navbar />
    <div className="min-h-[80vh]">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </div>
    <Footer />
    </BrowserRouter>
      </>
  )
}

export default App
