import { memo, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Nav from './components/Nav';
import Resume from './pages/Resume';
import Storyboard from './pages/Storyboard';
import TwoDAnimator from './pages/TwoDAnimator';

const App = memo(() => {
	useEffect(() => {
		document.title = 'Muflikhun Portfolio';
	});

	return (
		<BrowserRouter>
			<div className="w-full h-screen bg-gray-50 text-base text-gray-600 font-sans">
				<Nav />
				<div className="w-full overflow-y-auto bg-gray-50" style={{ height: 'calc(100vh - 90px)' }}>
					<Routes>
						<Route exact path="/" element={<Resume />} />
						<Route path="/storyboard" element={<Storyboard />} />
						<Route path="/2d-animator" element={<TwoDAnimator />} />
					</Routes>
				</div>
			</div>
		</BrowserRouter>
	);
});

export default App;
