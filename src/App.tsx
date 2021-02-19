import { FC, ReactElement, useEffect } from 'react';
import { getAvailableAirlines } from './API';
import './App.css';

const App: FC = (): ReactElement => {

	useEffect(() => {
		const result = getAvailableAirlines();
		console.log(result)
	}, []);

	return (
		<div className="App">

		</div>
	);
}

export default App;
