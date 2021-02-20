import { FC, ReactElement } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

type Props = {
	id: number;
}

const Airline: FC<Props> = ({ id }: Props): ReactElement => {
	const airlinesData = useSelector((state: RootStateOrAny) => state.airlines);

	return airlinesData.map((airline: any, index: number) => airline.id === id && <b key={index}>{airline.name}</b>)
}

export default Airline;