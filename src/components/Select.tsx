import { FC, ReactElement } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import Select from 'react-select';

type Props = {
	onChange: (label: string, id: number) => void;
}

const WithCallbacks: FC<Props> = ({ onChange }: Props): ReactElement => {
	const airports = useSelector((state: RootStateOrAny) => state.airports);

	return (
		<Select
			menuPlacement="top"
			styles={{
				option: (provided, state) => ({
					...provided,
					textAlign: 'left'
				}),
			}}
			defaultValue={
				{
					value: '-1',
					label: 'Select airport...'
				}
			}
			onChange={(e: any) => onChange(e.label, e.value)}
			options={
				airports.map((el: any) => {
					return {
						value: el.id,
						label: el.codeIata
					}
				})
			}
		/>
	);
}

export default WithCallbacks;