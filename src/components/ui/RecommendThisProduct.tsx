import { Link } from "react-router-dom";

import ProductPrice from "./ProductPrice";

export default function RecommendThisProduct({list}) {
	return (
		<div className="flex flex-col gap-[19px] px-3 mb-[60px]">
			<div className="w-full px-[7px]">
				<div className="flex justify-between items-center pb-[5px] pl-[11px] pr-3 border-b border-neutral-300">
					<p className="text-[9px] leading-[11px] text-neutral-700">この商品を見ている人におすすめ</p>
				</div>
			</div>
			<div className="grid grid-cols-4 gap-1 w-full">
				{
					list?.map((item, index) => 
						<Link 
							to={item?.link}
							key={index}
						>	
							<ProductPrice data={item}/>
						</Link>
					)
				}
			</div>
		</div>
	);
}
