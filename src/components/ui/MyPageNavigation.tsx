import { Link } from "react-router-dom";

import arrowRight from "@/assets/icon/searchTop/arrow-right.svg";

type ListItem = {
	label: string,
	link: string
}

type MyPageNavigationProps = {
	title: string
	list: ListItem[]
}

export default function MyPageNavigation({ title, list} : MyPageNavigationProps) {
	return (
		<div className="my-page-navigation flex flex-col gap-4 w-full">
			<div className="pb-4 pl-[2px] border-b border-neutral-300">
				<p className="text-[11px] leading-[13px] text-neutral-700">{title}</p>
			</div>
			{list?.map((item, index) =>
				<Link 
					to={item?.link}
					className="flex justify-between items-center pb-4 pl-[2px] pr-[9px] border-b border-neutral-300"
					key={index}
				>
					<p className="text-[11px] leading-[13px] text-neutral-600">{item?.label}</p>
					<img 
						src={arrowRight} 
						alt="arrow"
						className='w-[5px] h-[9px'
					/>
				</Link>
			)}
		</div>
	);
}
