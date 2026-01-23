import { Link } from "react-router-dom";

import checked from "@/assets/icon/followList/checked.svg";

export default function FollowListItem({data, isFirst}) {
	return (
		<Link 
			to={data?.link} 
			className={`follow-list-item flex justify-between items-center gap-1 w-full h-20 px-2 border-b border-dark-500 ${isFirst && "border-t"}`}
		>
			<div className="flex items-center gap-8">
				<img 
					src={data?.img} 
					alt="follow" 
					className="w-14 h-14 rounded-full"
				/>
				<p className="text-[13px] leading-[16px] text-neutral-600">{data?.name}</p>
			</div>
			<div className="flex items-center gap-[10px] h-7 pl-2 px-3 border border-neutral-1300 rounded-[8px]">
				<img 
					src={checked} 
					alt="checked" 
					className="w-[10px] h-[10px]"
				/>
				<p className="text-[11px] leading-[13px] text-neutral-600">フォロー中</p>
			</div>
		</Link>
	);
}
