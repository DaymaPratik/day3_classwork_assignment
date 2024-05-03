import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar/Navbar'
import MainSection from './components/main-section/MainSection'
import SecondMain from './components/second-main-sect/SecondMain'
import CardsBox from './components/cards-section/CardsBox'
import Footer from './components/footer/Footer'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Navbar/>
   <MainSection/>
   <SecondMain/>
   <CardsBox/>
   <Footer></Footer>
     </React.StrictMode>,
)
