import Modal from "./Modal";

export default function SelectRoomModal({open, onClose, handleSelect, defaultValue, list}) {
	const filteredList = list?.filter(item => item.id !== defaultValue?.id);

	const handleSelectItem = (item) => {
		handleSelect(item);
		onClose();
	}

	return (
		<Modal isHiddenFooter open={open} onClose={onClose}>
			<div
				className="select-room-modal flex flex-col items-center w-[391px] max-w-full pt-5 pb-7 px-2"
			>
				<p className="mb-5 text-[14px] leading-[17px] text-neutral-200">オークションルームの選択</p>
				<button
					onClick={onClose}
					className="mb-2 ml-auto text-[14px] leading-[17px]"
				>
					戻る
				</button>
				<div className="w-full h-max max-h-[340px] overflow-auto">
					<div className="flex flex-col w-full h-max border-t border-neutral-300">
						{
							filteredList?.map((item) => 
								(
									<button
										onClick={() => handleSelectItem(item)}
										className="flex items-center gap-4 py-4 px-3 border-b border-neutral-300"
									>
										<img
											src={item?.img}
											alt="product"
											className="w-[72px] aspect-square"
										/>
										<div className="flex flex-col gap-3 grow text-neutral-500">
											<p className="w-max text-[13px] leading-[16px]">{item?.name}</p>
											<div className="flex justify-between items-center w-full text-[11px] leading-[13px]">
												<p>配信開始</p>
												<p>{item?.day}</p>
												<p>{item?.time}</p>
											</div>
										</div>
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
