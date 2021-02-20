import React, { FC, ReactElement } from 'react';
import Airline from './Airline';
import Airport from './Airport';

type Props = {
	id?: number;
	price: number | null;
	airlineId?: number;
	arrivalAirportId?: number;
	departureAirportId?: number;
	main: boolean;
	from?: string;
	to?: string;
	direct?: boolean;
}

const Flights: FC<Props> = ({
	id,
	airlineId,
	price,
	arrivalAirportId,
	departureAirportId,
	from,
	to,
	main,
	direct
}: Props): ReactElement => {
	return (
		<div
			key={id}
			className={`${!main && 'ml-3'} border-2 bg-white p-3 my-2 flex justify-around items-center`}
		>
			<div className="w-1/5 text-left">
				{
					airlineId &&
					<Airline id={airlineId} />
				}
				{
					main &&
					<b>Main solution</b>
				}
			</div>
			<div className="w-1/5 flex justify-between">
				{
					main &&
					<>{from} ➔ {to}</>
				}
				{
					arrivalAirportId && departureAirportId &&
					<>
						<Airport id={arrivalAirportId} /> ➔ <Airport id={departureAirportId} />
					</>
				}
			</div>
			<div className="w-1/5">
				{
					main &&
					<span className="mx-3">{direct ? 'Direct flight' : 'With stop-overs'}</span>
				}
			</div>
			<div className="flex flex-col w-1/5">{`${price?.toFixed(2)} €`}</div>
			{
				main &&
				<button className="button bg-blue">Book Now!</button>
			}
		</div>
	);
}

Flights.defaultProps = {
	main: false
} as Partial<Props>

export default Flights;