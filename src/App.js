import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Currencies from './components/Currencies/Currencies';
import Home from './components/Home/Home';
import Exchange from './components/Exchange/Exchange';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import Crypto from './components/Crypto/Crypto';
import { Link, Routes, Route } from 'react-router-dom';
function App() {
	return (
		<div className="myapp">
			<div className="side_bar_wrapper">
				<Sidebar />
			</div>
			<div className="main_content_wrapper">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/currencies" element={<Currencies />} />
					<Route path="/exchange" element={<Exchange />} />
					<Route path="/news" element={<News />} />
					<Route path="/crypto/:id" element={<Crypto />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default App;
