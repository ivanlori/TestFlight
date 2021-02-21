import { FC, ReactElement } from 'react';
import './Button.css';

type Props = {
	label: string;
}

const Button: FC<Props> = ({ label }: Props): ReactElement => (
	<button className="btn">{label}</button>
);

export default Button;