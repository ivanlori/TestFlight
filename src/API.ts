import axios from 'axios';
import { isDev } from './utils';

// Proxy needed for localhost to avoid cors errors
const baseUrl = `${isDev() ? 'http://localhost:8080/' : ''}https://recruitment.shippypro.com/flight-engine/api`;

axios.defaults.headers.common['Authorization'] = 'Bearer 1|MN9ruQV0MFEsgOzMo8crw8gB575rsTe2H5U1y2Lj';

export const getAvailableAirports = async () => {
	try {
		const response = await axios.get(`${baseUrl}/airports/all`);

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
}

export const getAvailableAirlines = async () => {
	try {
		const response = await axios.get(`${baseUrl}/airlines/all`);

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
}

export const getAvailableFlights = async () => {
	try {
		const response = await axios.get(`${baseUrl}/flights/all`);

		return response.data.data;
	} catch (error) {
		console.log(error);
	}
}

export const getAvailableFlightsBetweenPlaces = async (from: string, to: string) => {
	try {
		const response = await axios.get(`${baseUrl}/flights/from/${from}/to/${to}`);

		return response.data;
	} catch (error) {
		console.log(error);
	}
}