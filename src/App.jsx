import './App.css'
import BestOfBestPage from './view/BestOfBestPage'
import MainPage from './view/MainPage'
import WhyJoinPage from './view/WhyJoinPage'


function App() {

  return (
    <div className='w-full h-full overflow-auto bg-amber-50'>
      <MainPage />
      <BestOfBestPage />
      <WhyJoinPage />
    </div>
  )
}

export default App
