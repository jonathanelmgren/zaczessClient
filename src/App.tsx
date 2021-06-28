import { Navigation } from "./components/navigation/Navigation"
import { Routes } from "./routes/Routes"
import { Footer } from './components/navigation/footer/Footer';

import './shared/global/Global.scss'

const App = () => {
  return (
    <Routes>
      <Navigation />
      <Footer />
    </Routes>
  )
}

export default App
