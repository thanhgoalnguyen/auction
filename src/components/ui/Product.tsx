import { Link } from "react-router-dom";

type ProductData = {
	link: string
	imgProduct: string
	nameProduct: string
	money: string
	nameShop: string
	imgShop?: string
}

type ProductProps = {
	data: ProductData
	showShop?: boolean
}

export default function Product({data, showShop} : ProductProps) {
	return (
		<Link 
			to={data?.link} 
			className="product-card flex flex-col gap-[2px]"
		>
			<img 
				src={data?.imgProduct} 
				alt="product" 
				className="w-full aspect-square rounded-[2px]"
			/>
			<div className="grid grid-cols-[115fr_70fr] gap-1">
				<div className="flex flex-col gap-1">
					<p className="text-[7px] leading-[8px] line-clamp-1">{data?.nameProduct}</p>
					<div className="flex items-center gap-6 text-[6px] leading-[7px]">
						<p>最低落札価格：</p>
						<p className="text-red-100">¥{data?.money}</p>
					</div>
				</div>
				{showShop &&
					<div className="flex justify-end items-end gap-1">
						<p className="text-[6px] leading-[7px] truncate">{data?.nameShop}</p>
						<img 
							src={data?.imgShop} 
							alt="shop" 
							className="w-[25px] h-[25px]"
						/>
					</div>
				}
			</div>
		</Link>
	);
}
