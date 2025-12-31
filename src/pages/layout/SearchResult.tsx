import PageHeader from "@/components/layout/PageHeader";
import PrivacyTerms from "@/components/ui/PrivacyTerms";
import StatusDropdown from "@/components/ui/StatusDropdown";
import SortDropdown from "@/components/ui/SortDropdown";
import Product from "@/components/ui/Product";

import filter from "@/assets/icon/searchResult/filter.svg";
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

export default function SearchResult() {
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
		<div className="search-result flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="メンズジャケットの検索結果"/>
			<div className="flex flex-col gap-5 w-full max-w-[768px] pt-6 pb-[58px] px-3 text-[11px] leading-[13px]">
				<div className="flex flex-col items-end gap-[11px] pb-[6px] px-[18px] border-b border-neutral-300">
					<SortDropdown/>
					<div className="flex justify-between items-center w-full">
						<StatusDropdown/>
						<button className="flex items-center gap-2">
							<img 
								src={filter} 
								alt="filter"
								className='w-[11px] h-[9px]'
							/>
							<p className="text-[12px] leading-[15px]">絞り込み(1)</p>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-x-[3px] gap-y-[9px] w-full px-[7px]">
					{
						listRecentViewProduct?.map((item, index) => 
							<Product data={item} key={index}/>
						)
					}
				</div>
			</div>
			<PrivacyTerms/>
		</div>
	);
}
