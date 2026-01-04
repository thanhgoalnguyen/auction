import { Link } from "react-router-dom";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import search from "@/assets/icon/searchTop/search.svg";

export default function SearchTopItem({data, index}) {
	return (
		<Link
			to={data?.link}
			className={`search-top-item flex justify-between items-center gap-1 h-[46px] pl-[11px] pr-[13px] border-b border-neutral-300 ${index === 0 ? "border-t" : "" }`}
		>
			<div className="flex items-center gap-4">
				<img
					src={search}
					alt="search"
					className="w-3 h-3"
				/>
				<div>
					<p className="text-[11px] leading-[13px] text-neutral-600">{data?.title}</p>
					{data?.subTitle && <p className="text-[8px] leading-[10px] text-neutral-700">{data?.subTitle}</p>}
				</div>
			</div>
			<img
				src={arrowRight}
				alt="arrow"
				className="w-[5px] h-2"
			/>
		</Link>
	);
}
