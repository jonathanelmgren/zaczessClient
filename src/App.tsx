import { Navigation } from "./components/navigation/Navigation"
import { Routes } from "./routes/Routes"
import { ProductsProvider } from './shared/provider/ProductProvider';
import { Footer } from './components/navigation/footer/Footer';

import './shared/global/Global.scss'

const App = () => {
  return (
    <ProductsProvider>
      <Routes>
          <Navigation />
          <Footer />
      </Routes>
    </ProductsProvider>
  )
}

export default App
