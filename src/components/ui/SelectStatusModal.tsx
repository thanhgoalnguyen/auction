import Modal from "./Modal";

export default function SelectStatusModal({open, onClose, handleSelect, defaultValue, list}) {
	const filteredList = list?.filter(item => item.id !== defaultValue?.id);

	const handleSelectItem = (item) => {
		handleSelect(item);
		onClose();
	}

	return (
		<Modal isHiddenFooter open={open} onClose={onClose}>
			<div
				className="select-status-modal flex flex-col items-center w-[391px] max-w-full pt-5 pb-7 px-2"
			>
				<p className="mb-5 text-[14px] leading-[17px] text-neutral-200">商品の状態</p>
				<button
					onClick={onClose}
					className="mb-2 ml-auto text-[14px] leading-[17px]"
				>
					戻る
				</button>
				<div className="w-full h-max max-h-[385px] overflow-auto">
					<div className="flex flex-col w-full h-max border-t border-neutral-300">
						{
							filteredList?.map((item) => 
								(
									<button
										onClick={() => handleSelectItem(item)}
										key={item?.id}
										className="status-modal-item flex flex-col gap-1 w-full py-4 px-[2px] border-b border-neutral-300"
									>
										<p className="text-[11px] leading-[13px] text-left">{item?.title}</p>
										<p className="text-[9px] leading-[11px] text-neutral-700 text-left">{item?.des}</p>
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
