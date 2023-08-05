import './App.css'
import GrowPage from './view/GrowPage'
import BestOfBestPage from './view/BestOfBestPage'
import LoveUsPage from './view/LoveUsPage'
import MainPage from './view/MainPage'
import WhyJoinPage from './view/WhyJoinPage'


function App() {

  return (
    <div className='w-full h-full overflow-auto bg-amber-50'>
      <MainPage />
      <BestOfBestPage />
      <WhyJoinPage />
      <LoveUsPage />
      <GrowPage />
    </div>
  )
}

export default App
