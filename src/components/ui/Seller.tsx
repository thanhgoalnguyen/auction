import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";
import { Link } from "react-router-dom";

export default function Seller({data, className}) {
	return (
		<div className={`seller flex flex-col gap-2 ${className}`}>
			<div className="pb-1 px-3 border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">出品者</p>
			</div>
			<Link 
				to="/"
				className="flex items-center"
			>
				<img 
					src={data?.avatar} 
					alt="avatar"
					className='w-full max-w-[43px] mr-4 aspect-square rounded-full'
				/>
				<p className="text-[16px] leading-[19px] text-neutral-600">{data?.name}</p>
				<img 
					src={arrowRight} 
					alt="arrow"
					className="ml-auto w-[5px] h-2"
				/>
			</Link>
		</div>
	);
}
