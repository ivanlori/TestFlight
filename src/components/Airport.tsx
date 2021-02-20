import { FC, ReactElement } from 'react';
import { useSelector, RootStateOrAny } from 'react-redux';

type Props = {
	id: number;
}

const Airport: FC<Props> = ({ id }: Props): ReactElement => {
	const airportsData = useSelector((state: RootStateOrAny) => state.airports);

	return (
		airportsData.map((airport: any, index: number) => airport.id === id &&
			<span key={index} className="mx-3">{airport.codeIata}</span>)
	)
}

export default Airport;