
import './App.css'
import NavBar from './Component/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
// import DaisyNav from './Component/DaisyNav/DaisyNav'

function App() {
  

  return (
    <>
     <NavBar></NavBar>
      <h1 className='text-3xl font-bold text-center pt-4'>Vite + React</h1>
      <PriceOptions></PriceOptions>
      
    </>
  )
}

export default App
