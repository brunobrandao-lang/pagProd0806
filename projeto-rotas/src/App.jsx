import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './assets/components/Footer'
import Header from './assets/components/Header'
import Home from './assets/components/pages/Home'
import SobreNos from './assets/components/pages/SobreNos'
import Produtos from './assets/components/pages/produtos'

function App() {
  
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sobre-nos' element={<SobreNos />} />
          <Route path='/produtos' element={<Produtos />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
