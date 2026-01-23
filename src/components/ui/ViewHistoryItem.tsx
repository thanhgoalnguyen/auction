import { Link } from "react-router-dom";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

export default function ViewHistoryItem({data, isFirst}) {
	return (
		<Link
			to={data?.link} 
			className={`view-history-item flex items-center gap-4 p-2 border-b border-neutral-300 ${isFirst && "border-t"}`}
		>
			<img
				src={data?.img}
				alt="product"
				className="w-[84px] aspect-square"
			/>
			<div className="flex justify-between items-center gap-1 grow">
				<div className="flex flex-col gap-4">
					<p className="text-[13px] leading-[16px]">{data?.name}</p>
					<div className="flex items-center gap-1 text-[10px] leading-[12px]">
						<p>最低落札価格：</p>
						<p className="text-red-100">¥{data?.money}</p>
					</div>
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
