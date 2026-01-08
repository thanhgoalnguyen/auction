import { Link } from "react-router-dom";

import ProductPrice from "./ProductPrice";

export default function RecommendThisProduct({list}) {
	return (
		<div className="flex flex-col gap-2 mb-[60px]">
			<div className="flex justify-between items-center pb-1 px-3 border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">この商品を見ている人におすすめ</p>
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
