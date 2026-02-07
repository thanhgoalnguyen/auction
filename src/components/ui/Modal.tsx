import { useEffect, useRef } from "react";
import { createPortal } from 'react-dom';
import type { ReactNode } from "react";

type ModalProps = {
    children?: ReactNode;
    open: boolean;
    onClose: () => void;
	isHiddenFooter?: boolean
};

export default function Modal({ children, open, onClose, isHiddenFooter }: ModalProps) {
	const modalRef = useRef(null);

	const classModal = isHiddenFooter ? "bottom-0 h-[calc(100%-55px)]" : "bottom-[72px] h-[calc(100%-127px)]";

	useEffect(() => {
		if (!open) return;

		function handleClickOutside(event) {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose();
			}
		}

		const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };

    	document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("keydown", handleKeyDown);
    
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("keydown", handleKeyDown);
		};
  	}, [open]);

	if (!open) return null;

	return createPortal(
		<div className={`fixed top-[55px] z-[1] left-0 w-full overflow-auto ${classModal}`}>
			<div className="relative flex justify-center w-full h-max min-h-full p-5">
				<div
					ref={modalRef}
					className="zoom-in-ani relative z-[1] w-max max-w-full my-auto bg-dark-300 rounded-[8px]"
				>
					{children}
				</div>
				<div
					className="absolute top-0 left-0 z-0 left-0 w-full h-full bg-neutral-900 bg-opacity-40"
				>
				</div>
			</div>
		</div>,
		document.getElementById('modal-root')
	);
}
