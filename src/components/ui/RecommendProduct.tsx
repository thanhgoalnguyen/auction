import Product from "./Product";

import product10 from "@/assets/img/10.png";
import product11 from "@/assets/img/11.png";
import product12 from "@/assets/img/12.png";
import product13 from "@/assets/img/13.png";
import product14 from "@/assets/img/14.png";
import product15 from "@/assets/img/15.png";
import shop16 from "@/assets/img/16.png";
import shop17 from "@/assets/img/17.png";
import shop18 from "@/assets/img/18.png";
import shop19 from "@/assets/img/19.png";
import shop20 from "@/assets/img/20.png";
import shop21 from "@/assets/img/21.png";

export default function RecommendProduct() {
	const listRecentViewProduct = [
		{
			imgProduct: product10,
			money: "1,200",
			nameProduct: "balenciaga ストンパーブーツ",
			imgShop: shop16,
			nameShop: "simgffj",
			link: "/a"
		},
		{
			imgProduct: product11,
			money: "9,500",
			nameProduct: "Noir kei ninomiya ラッフルスカート",
			imgShop: shop17,
			nameShop: "ponta",
			link: "/a"
		},
		{
			imgProduct: product12,
			money: "6,000",
			nameProduct: "DRIES VAN NOTEN スタッズ",
			imgShop: shop18,
			nameShop: "佐藤美加",
			link: "/a"
		},
		{
			imgProduct: product13,
			money: "2,000",
			nameProduct: "W&LT / Psychedelic Knit Vest",
			imgShop: shop19,
			nameShop: "meangirls",
			link: "/a"
		},
		{
			imgProduct: product14,
			money: "9,200",
			nameProduct: "アーティザナル トロンプルイユ",
			imgShop: shop20,
			nameShop: "ReviResonia",
			link: "/a"
		},
		{
			imgProduct: product15,
			money: "38,000",
			nameProduct: "Archive Denim Half Coat",
			imgShop: shop21,
			nameShop: "ichigo",
			link: "/a"
		},
	];

	return (
		<div className="recommend-product flex flex-col gap-[15px] w-full px-4">
			<p className="text-[11px] leading-[13px]">最近閲覧した商品</p>
			<div className="grid grid-cols-2 gap-x-[2px] gap-y-[11px] w-full">
				{
					listRecentViewProduct?.map((item, index) => 
						<Product data={item} key={index} showShop/>
					)
				}
			</div>
		</div>
	)
}
  