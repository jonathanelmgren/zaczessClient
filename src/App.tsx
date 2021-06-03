import { Navigation } from "./components/navigation/Navigation"
import { Routes } from "./routes/Routes"
import './shared/global/Global.scss'

const App = () => {
  return (
    <Routes>
      <Navigation />
    </Routes>
  )
}

export default App
