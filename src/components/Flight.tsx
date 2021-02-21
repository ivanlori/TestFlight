import React, { FC, ReactElement } from 'react';
import Airline from './Airline';
import Airport from './Airport';
import Button from '../components/button';

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
			className={`${!main ? 'ml-3' : 'flex-wrap shadow'} border-2 bg-white p-3 my-2 flex justify-around items-center`}
		>
			<div className={`${!main && 'w-1/4 text-left'}`}>
				{
					airlineId &&
					<Airline id={airlineId} />
				}
				{
					main &&
					<b>Main solution</b>
				}
			</div>
			<div className={`${!main && 'w-1/4 text-left'} flex justify-between`}>
				{
					main &&
					<>{from} ➔ {to}</>
				}
				{
					arrivalAirportId && departureAirportId &&
					<>
						<Airport id={departureAirportId} /> ➔ <Airport id={arrivalAirportId} />
					</>
				}
			</div>
			<div>
				{
					main &&
					<span className="mx-3">{direct ? 'Direct flight' : 'With stop-overs'}</span>
				}
			</div>
			{
				price &&
				<div className={`${!main && 'w-1/4 text-right'}`}>{`${price.toFixed(2)} $`}</div>
			}
			{
				main &&
				<Button label="Book now!" />
			}
		</div>
	);
}

Flights.defaultProps = {
	main: false
} as Partial<Props>

export default Flights;