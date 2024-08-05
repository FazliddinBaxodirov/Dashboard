import './App.css'
import Navbar from './components/Navbar/Navbar'
import Customroute from './routes/Customroute'

function App() {
  return (
    <>
        <main className='flex'> 
        <Navbar/>
        <Customroute/>
        </main>
    </>
  )
}

export default App
