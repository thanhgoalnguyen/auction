import { useState } from "react";

import arrowDown from "@/assets/icon/privacyTerms/arrow-down.svg";
import checkbox from "@/assets/icon/searchResult/checkbox.svg";
import checkboxActive from "@/assets/icon/searchResult/checkbox-active.svg";

export default function StatusDropdown() {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState("全ての商品");
	const [value, setValue] = useState(1);

	const listStatus = [
		{
			label: "全ての商品",
			value: 1,
		},
		{
			label: "出品中のみ",
			value: 2,
		},
		{
			label: "販売終了",
			value: 3,
		},
	]

	const handleOpen = () => {
		setOpen(!open);
	}

	const handleSetValue = (item) => {
		setTitle(item?.label);
		setValue(item?.value);
		handleOpen();
	}

  	return (
		<div className="relative">
			<button onClick={handleOpen} className="flex items-center gap-[19px]" id="label-for-editor">
				<p className="text-[12px] leading-[15px]">{title}</p>
				<img 
					src={arrowDown} 
					alt="arrow"
					className='w-2 h-[5px]'
				/>
			</button>
			{ open && 
				<div className="absolute top-full left-0 z-[1] translate-y-[5px] translate-x-[-18px] flex flex-col justify-center gap-[9px] w-[129px] h-max p-2 bg-dark-300">
					{listStatus?.map(item =>
						<button 
							className="flex justify-between items-center" 
							key={item?.value}
							onClick={() => handleSetValue(item)}
						>
							<p className="text-[10px] leading-[12px]">{item?.label}</p>
							<img 
								src={value === item?.value ? checkboxActive : checkbox} 
								alt="checkbox"
								className='w-[10px] h-[10px]'
							/>
						</button>
					)}
				</div>
			}
			{ open && 
				<div onClick={handleOpen} className="fixed top-[55px] bottom-[72px] left-0 w-full h-[calc(100%-127px)] bg-neutral-900 bg-opacity-40"></div>
			}
		</div>
	);
}
