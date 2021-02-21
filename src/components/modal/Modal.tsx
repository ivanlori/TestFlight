import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import './Modal.css';

const modalRoot = document.getElementById('modal');

interface Props {
	children?: ReactNode;
	open: boolean;
	title?: string;
	onClose: () => void;
}

class Modal extends Component<Props> {
	_root = document.createElement('div');
	componentDidMount() {
		modalRoot?.appendChild(this._root);
	}

	componentWillUnmount() {
		modalRoot?.removeChild(this._root);
	}

	render() {
		const { open, children, title, onClose } = this.props;

		document.body.style.overflowY = open ? 'hidden' : 'scroll';

		if (!open) return null;

		return createPortal(
			<div className="fixed z-10 inset-0 overflow-y-auto">
				<div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center">
					<div className="fixed inset-0 transition-opacity">
						<div className="absolute inset-0 bg-gray-500 opacity-75"></div>
					</div>
					<div className="modal__content" role="dialog" aria-modal="true">
						<div className="modal__header">
							<h3 className="text-2xl">{title}</h3>
							<span
								className="cursor-pointer text-1xl"
								onClick={() => onClose()}
							>
								✕
							</span>
						</div>
						<div className="flex bg-white">
							{children}
						</div>
					</div>
				</div>
			</div>,
			this._root
		)
	}
}

export default Modal;

