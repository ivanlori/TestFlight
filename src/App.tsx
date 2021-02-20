import { FC, ReactElement, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ClipLoader } from "react-spinners";
import Select from './components/Select';
import {
	getAvailableAirlines,
	getAvailableAirports,
	getAvailableFlightsBetweenPlaces,
	getAvailableFlights
} from './API';
import {
	airportsSettedAction,
	airlinesSettedAction,
	flightsSettedAction
} from './store';
import './App.css';
import Flight from './components/Flight';

const App: FC = (): ReactElement => {
	const setAirports = useDispatch();
	const setAirlines = useDispatch();
	const setFlights = useDispatch();
	const [loader, setLoader] = useState<boolean>(false);
	const [fromLabel, setFromLabel] = useState<string>('');
	const [toLabel, setToLabel] = useState<string>('');
	const [fromId, setFromId] = useState<number>();
	const [toId, setToId] = useState<number>();
	const [totalPrice, setTotalPrice] = useState<number>();
	const [availableFlights, setAvailableFlights] = useState<[]>([]);

	const getAirports = async () => {
		const result = await getAvailableAirports();
		setAirports(airportsSettedAction(result));
	}

	const getAirlines = async () => {
		const result = await getAvailableAirlines();
		setAirlines(airlinesSettedAction(result));
	}

	const getFlightsBetween = async (from: string, to: string) => {
		setLoader(true);
		const result = await getAvailableFlightsBetweenPlaces(from, to);
		setAvailableFlights(result.data);
		const prices: number[] = [];

		result.data.forEach((el: any) => {
			prices.push(el.price);
		});

		setTotalPrice(prices.reduce((a, b) => a + b, 0));
		setLoader(false);
	}

	const getFlights = async () => {
		const result = await getAvailableFlights();
		setFlights(flightsSettedAction(result));
	}

	useEffect(() => {
		getAirports();
		getAirlines();
		getFlights();
		console.log(toId)
		console.log(fromId)
	}, []);

	useEffect(() => {
		if (fromLabel && toLabel) {
			getFlightsBetween(fromLabel, toLabel);
		}
	}, [fromLabel, toLabel]);

	return (
		<main>
			<div className="grid grid-cols-2 gap-4 p-5">
				<div className="flex flex-col">
					<label>From: </label>
					<Select onChange={(label, id) => {
						setFromLabel(label);
						setFromId(id);
					}} />
				</div>
				<div className="flex flex-col">
					<label>To: </label>
					<Select onChange={(label, id) => {
						setToLabel(label);
						setToId(id);
					}} />
				</div>
			</div>
			<div className="m-5 text-center">
				<ClipLoader
					size={40}
					css="mx-auto my-0 block"
					color="#000"
					loading={loader}
				/>
				{
					availableFlights.length === 0 && !loader
						?
						<span>Select Airports to show data...</span>
						:
						<>
							<ul>
								<Flight
									price={totalPrice || null}
									from={fromLabel}
									to={toLabel}
									main={true}
									direct={String(availableFlights.length) === String(1)}
								/>
								{
									availableFlights.map((flight: any) => {
										return <Flight {...flight} />
									})
								}
							</ul>
						</>
				}
			</div>
		</main>
	);
}

export default App;
