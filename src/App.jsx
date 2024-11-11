import { BrowserRouter } from "react-router-dom"
import Navbar from "./components/Navbar"
import Rutas from "./routers/Rutas"

// rafce
const App = () => {
  return (
    <BrowserRouter>
      
        <Navbar />
      
        <div className="container">
          <Rutas />
        </div>
      
      </BrowserRouter>
  )
}

export default App