import Modal from "./Modal";
import Input from "./Input";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

export default function SelectCategoryModal({open, onClose, handleSelect, defaultValue, list}) {
	const filteredList = list?.filter(item => item.id !== defaultValue?.id);

	const handleSelectItem = (item) => {
		handleSelect(item);
		onClose();
	}

	return (
		<Modal isHiddenFooter open={open} onClose={onClose}>
			<div
				className="select-category-modal flex flex-col items-center w-[391px] max-w-full pt-5 pb-7 px-2"
			>
				<p className="mb-5 text-[14px] leading-[17px] text-neutral-200">カテゴリー</p>
				<button
					onClick={onClose}
					className="mb-2 ml-auto text-[10px] leading-[12px]"
				>
					戻る
				</button>
				<Input className="mb-10" placeholder="カテゴリー名を検索"/>
				<div className="w-full h-max max-h-[250px] overflow-auto">
					<div className="flex flex-col w-full h-max border-t border-neutral-300">
						{
							filteredList?.map((item, index) =>
								(
									<button
										onClick={() => handleSelectItem(item)}
										key={item?.id}
										className="category-modal-item flex justify-between items-center gap-1 w-full py-4 pl-[2px] pr-[3] border-b border-neutral-300"
									>
										<p className="text-[11px] leading-[13px] text-neutral-600">{item?.title}</p>
										<img
											src={arrowRight}
											alt="arrow"
											className="w-[5px] h-2"
										/>
									</button>
								)
							)
						}
					</div>
				</div>
			
			</div>
		</Modal>
	);
}
