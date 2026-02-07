import { useNavigate } from "react-router-dom";

import ButtonContainer from "@/components/ui/ButtonContainer";
import Modal from "./Modal";

export default function LogOutModal({open, onClose}) {
	const navigate = useNavigate();

	const handleLogout = () => {
		navigate("/layout/");
	};

	return (
		<Modal open={open} onClose={onClose}>
			<div
				className="flex flex-col items-center w-[291px] max-w-full pt-5 pb-7 px-1"
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
					onClick={onClose}
					className="text-[14px] leading-[17px] text-red-500"
				>
					キャンセル
				</button>
			</div>
		</Modal>
	);
}
