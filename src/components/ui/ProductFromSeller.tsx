import { Link } from "react-router-dom";

import ProductPrice from "./ProductPrice";

export default function ProductFromSeller({list}) {
	return (
		<div className="flex flex-col gap-2 mb-10">
			<div className="flex justify-between items-center pb-1 px-3 border-b border-neutral-300">
				<p className="text-[9px] leading-[11px] text-neutral-700">この出品者の商品</p>
				<Link 
					to="/"
					className="text-[7px] leading-[8px] text-neutral-600"
				>
					すべて見る ＞
				</Link>
			</div>
			<div className="grid grid-cols-4 gap-1 w-full">
				{
					list?.map((item, index) => 
						<ProductPrice data={item} key={index}/>
					)
				}
			</div>
		</div>
	);
}
