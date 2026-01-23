import { Link } from "react-router-dom";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

export default function WonItemListItem({data, isFirst}) {
	return (
		<Link
			to={data?.link} 
			className={`won-item-list-item flex items-center gap-4 py-2 px-2 border-b border-neutral-300 ${isFirst && "border-t"}`}
		>
			<img
				src={data?.img}
				alt="product"
				className="w-[84px] aspect-square"
			/>
			<div className="flex justify-between items-center gap-1 grow">
				<div>
					<p className="text-[13px] leading-[16px] mb-[6px]">{data?.name}</p>
					<div className="flex items-center gap-1 mb-1">
						<p className="text-[9px] leading-[11px]">{data?.time}</p>
					</div>
					<p className="text-[9px] leading-[11px] text-neutral-700">発送待ち</p>
				</div>
				<img 
					src={arrowRight} 
					alt="arrow" 
					className="w-[5px] h-2"
				/>
			</div>
		</Link>
	);
}
