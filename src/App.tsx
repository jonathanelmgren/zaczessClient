import { Navigation } from './components/navigation/Navigation'
import { Routes } from './routes/Routes'
import { Footer } from './components/navigation/footer/Footer'

import './shared/global/Global.scss'
import { CartToggleProvider } from './shared/provider/CartToggleProvider'
import { KlarnaOrderProvider } from './shared/provider/KlarnaOrderProvider'

const App = () => {
	return (
		<CartToggleProvider>
			<KlarnaOrderProvider>
				<Routes>
					<Navigation />
					<Footer />
				</Routes>
			</KlarnaOrderProvider>
		</CartToggleProvider>
	)
}

export default App
