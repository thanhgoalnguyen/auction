import { useEffect, useState, useRef } from "react";
import { useOutletContext } from "react-router-dom";

import arrowDown from "@/assets/icon/policyTerm/arrow-down.svg";
import checkbox from "@/assets/icon/searchResult/checkbox.svg";
import checkboxActive from "@/assets/icon/searchResult/checkbox-active.svg";

export default function StatusDropdown() {
	const [open, setOpen] = useState(false);
	const [title, setTitle] = useState("全ての商品");
	const [value, setValue] = useState(1);

	const bodyContainerRef = useOutletContext<React.RefObject<HTMLDivElement>>();
	const statusRef = useRef(null);

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

	useEffect(() => {
		function handleClickOutside(event) {
			if (statusRef.current && !statusRef.current.contains(event.target)) {
				handleOpen();
			}
		}

		if (open) {
    		document.addEventListener("mousedown", handleClickOutside);
			bodyContainerRef?.current?.classList?.add('overflow-hidden');
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			bodyContainerRef?.current?.classList?.remove('overflow-hidden');

		};
	}, [open, bodyContainerRef])

  	return (
		<div className="relative">
			<button onClick={handleOpen} className="flex items-center gap-[19px]" id="label-for-editor">
				<p className="text-[12px] leading-[15px]">{title}</p>
				<img 
					src={arrowDown} 
					alt="arrow"
					className={`w-2 h-[5px] ${open && "rotate-180"}`}
				/>
			</button>
			{open && 
				<div
					ref={statusRef}
				 	className="absolute top-full left-0 z-[2] translate-y-[5px] translate-x-[-18px] flex flex-col justify-center gap-2 w-[129px] h-max p-2 bg-dark-300"
				>
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
			{open && 
				<div className="fixed top-[55px] bottom-[72px] z-[1] left-0 w-full h-[calc(100%-127px)] bg-neutral-900 bg-opacity-40"></div>
			}
		</div>
	);
}
