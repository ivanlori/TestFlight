import { FC, ReactElement, useState } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';
import Map from './Map';

import Modal from './modal';

type Props = {
	id: number;
}

const Airport: FC<Props> = ({ id }: Props): ReactElement => {
	const airportsData = useSelector((state: RootStateOrAny) => state.airports);
	const [modal, setModal] = useState<boolean>(false);
	const [lng, setLng] = useState<number>(0);
	const [lat, setLat] = useState<number>(0);
	const [modalTitle, setModalTitle] = useState<string>('');

	return (
		<>
			{
				airportsData.map((airport: any, index: number) => airport.id === id &&
					<div
						key={index}
						className="mx-3"
					>
						{airport.codeIata} <span className="cursor-pointer hover:underline" onClick={() => {
							setModal(true);
							setLat(airport.latitude);
							setLng(airport.longitude);
							setModalTitle(airport.codeIata);
						}}>Map</span>
					</div>
				)
			}
			<Modal
				title={modalTitle}
				open={modal}
				onClose={() => setModal(false)}
			>
				<Map lat={lat} lng={lng} />
			</Modal>
		</>
	)
}

export default Airport;