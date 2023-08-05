import './App.css'
import GrowPage from './view/GrowPage'
import BestOfBestPage from './view/BestOfBestPage'
import LoveUsPage from './view/LoveUsPage'
import MainPage from './view/MainPage'
import WhyJoinPage from './view/WhyJoinPage'
import CollectedPage from './view/CollectedPage'
import Footer from './view/footer'


function App() {

  return (
    <div className='w-full h-full bg-amber-50'>
      <MainPage />
      <BestOfBestPage />
      <WhyJoinPage />
      <LoveUsPage />
      <GrowPage />
      <CollectedPage />
      <Footer />
    </div>
  )
}

export default App
