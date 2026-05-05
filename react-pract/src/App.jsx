import './App.css'
import { useContext } from 'react'
import ThemeContext from './Context/ThemeContext'

function App() {
  const Theme = useContext(ThemeContext)
  return (
    <>
      <section id="center">
        <div style={{backgroundColor:Theme.color}}>
          <p>Hello I am Shantanu Pandya</p>
        </div>
      </section>
    </>
  )
}

export default App
