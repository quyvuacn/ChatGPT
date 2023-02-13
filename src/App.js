import { BrowserRouter, Route, Routes } from "react-router-dom"
import BoxChat from "./components/BoxChat"

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route key="chat" path="/" element={<BoxChat />} />
					<Route key="chat" path="/chat" element={<BoxChat />} />
				</Routes>
			</div>
		</BrowserRouter>
	)
}

export default App
