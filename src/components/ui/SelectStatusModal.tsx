import Modal from "./Modal";

const listStatus = [
	{	
		title: "未使用に近い > 数回使用し、あまり使用感がない",
		des: "未使用に近い > 数回使用し、あまり使用感がない",
		id: 1
	},
	{	
		title: "新品、未使用",
		des: "新品で購入し、一度も使用していない",
		id: 2
	},
	{	
		title: "未使用に近い",
		des: "数回使用し、あまり使用感がない",
		id: 3
	},
	{	
		title: "目立った傷や汚れなし",
		des: "細かな使用感・傷・汚れはあるが、目立たない",
		id: 4
	},
	{	
		title: "やや傷や汚れあり",
		des: "目につく傷や汚れがある",
		id: 5
	},	
	{	
		title: "傷や汚れあり",
		des: "多くの人が見てわかるような傷や汚れがある",
		id: 6
	},
	{	
		title: "全体的に状態が悪い",
		des: "商品の全体に目立つ傷や汚れ、ダメージがある",
		id: 7
	},
]

export default function SelectStatusModal({open, onClose, handleSelect, defaultValue}) {
	const filteredList = listStatus.filter(item => item.id !== defaultValue?.id);

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
