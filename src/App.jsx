import './App.css'
import Drinks from './components/Drinks'
import Hero from './components/Hero'
import Menu from './components/Menu'
import OurTeam from './components/OurTeam'
import Footer from './layout/Footer'
import Header from './layout/Header'
import MenuCard from './ui/MenuCard'

function App() {

  return (
    <>
      {/* <Header/> */}
      <Hero />
      <Menu />
      <Drinks />
      <OurTeam />
      <div className='p-10 flex w-full justify-center'>
        <MenuCard />

      </div>
      <Footer />
    </>
  )
}

export default App
