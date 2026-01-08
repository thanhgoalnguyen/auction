import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

import ButtonContainer from "@/components/ui/ButtonContainer";

export default function LogOutModal({open, handleOpen}) {
	const navigate = useNavigate();

	const modalRef = useRef(null);

	const handleLogout = () => {
		navigate("/");
	};

	useEffect(() => {
		if (!open) return;

		function handleClickOutside(event) {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				handleOpen();
			}
		}

    	document.addEventListener("mousedown", handleClickOutside);
    
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
  	}, [open]);

	if (!open) return null;
 
	return (
		<div className="fixed top-[55px] bottom-[72px] z-[1] left-0 w-full h-[calc(100%-127px)] overflow-auto">
			<div className="relative flex justify-center w-full h-max min-h-full p-5">
				<div
					ref={modalRef}
					className="zoom-in-ani relative z-[1] flex flex-col items-center w-full max-w-[291px] pt-5 pb-7 px-1 my-auto bg-dark-300"
				>
					<p className="mb-5 text-[14px] leading-[17px] text-neutral-200">ログアウトしますか？</p>
					<ButtonContainer 
						className="mb-[22px]"
						kind="primary-large"
						onClick={handleLogout}
					>
						ログアウトする
					</ButtonContainer>
					<button
						onClick={handleOpen}
						className="text-[14px] leading-[17px] text-red-500"
					>
						キャンセル
					</button>
				</div>
				<div
					className="absolute top-0 left-0 z-0 left-0 w-full h-full bg-neutral-900 bg-opacity-40"
				>
				</div>
			</div>
		</div>
	);
}
