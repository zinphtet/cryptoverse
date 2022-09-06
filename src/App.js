import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
	return (
		<div className="myapp">
			<div className="side_bar_wrapper">
				<Sidebar />
			</div>
			<div className="main_content_wrapper">HELLO MAIN CONTENT</div>
		</div>
	);
}

export default App;
