import { Navigation } from "./components/navigation/Navigation"
import { Routes } from "./routes/Routes"
import { Footer } from './components/navigation/footer/Footer';

import './shared/global/Global.scss'
import { CartToggleProvider } from "./shared/provider/CartToggleProvider";

const App = () => {
  return (
    <CartToggleProvider>
      <Routes>
        <Navigation />
        <Footer />
      </Routes>
    </CartToggleProvider>
  )
}

export default App
