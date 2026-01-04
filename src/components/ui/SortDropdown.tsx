import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

import sort from "@/assets/icon/searchResult/sort.svg";
import checkbox from "@/assets/icon/searchResult/checkbox.svg";
import checkboxActive from "@/assets/icon/searchResult/checkbox-active.svg";

export default function SortDropdown() {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState("おすすめ順");
	const [value, setValue] = useState(1);

	const bodyContainerRef = useOutletContext<React.RefObject<HTMLDivElement>>();

	const listSort = [
		{
			label: "おすすめ順",
			value: 1,
		},
		{
			label: "新しい順",
			value: 2,
		},
		{
			label: "入札価格の安い順",
			value: 3,
		},
		{
			label: "入札価格の安い順",
			value: 4,
		},
		{
			label: "いいね！順",
			value: 5,
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

	useEffect(() => {
		if (open) {
			bodyContainerRef.current.classList.add('overflow-hidden');
		} else {
			bodyContainerRef.current.classList.remove('overflow-hidden');
		}
	}, [open])

  	return (
		<div className="relative">
			<button onClick={handleOpen} className="flex items-center gap-[6px]">
				<img 
					src={sort} 
					alt="sort"
					className='w-[18px] h-[13px]'
				/>
				<p className="text-[12px] leading-[15px]">{title}</p>
			</button>
			{ open && 
				<div className="absolute top-full right-0 z-[2] translate-y-[5px] translate-x-[11px] flex flex-col justify-center gap-[9px] w-[129px] h-max p-2 bg-dark-300">
					{listSort?.map(item =>
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
				<div onClick={handleOpen} className="fixed top-[55px] bottom-[72px] left-0 z-[1] w-full h-[calc(100%-127px)] bg-neutral-900 bg-opacity-40"></div>
			}
		</div>
	);
}
