import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Drinks from './components/Drinks'
import Hero from './components/Hero'
import Menu from './components/Menu'
import OurTeam from './components/OurTeam'
import Footer from './layout/Footer'
import Header from './layout/Header'
import MenuCard from './ui/MenuCard'

const HomePage = () => (
  <>
    <Hero />
    <Menu />
    <Drinks />
    <OurTeam />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:category/:id" element={<MenuCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App