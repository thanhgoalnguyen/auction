import ButtonContainer from "@/components/ui/ButtonContainer";
import Modal from "./Modal";

export default function DeleteModal({title, open, onClose}) {
	return (
		<Modal open={open} onClose={onClose} isHiddenFooter>
			<div
				className="flex flex-col items-center w-full pt-5 pb-7 px-1"
			>
				<p className="mb-3 text-[14px] leading-[17px] text-neutral-200">{title}</p>
				<p className="mb-5 text-[10px] leading-[12px] text-neutral-200">削除すると復活させることは出来ません。</p>
				<ButtonContainer 
				
					className="mb-[22px]"
					kind="primary-large"
					onClick={onClose}
				>
					削除する
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
