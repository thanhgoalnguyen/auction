import PageHeader from "@/components/layout/PageHeader";
import PolicyTerm from "@/components/ui/PolicyTerm";
import StatusDropdown from "@/components/ui/StatusDropdown";
import SortDropdown from "@/components/ui/SortDropdown";
import Product from "@/components/ui/Product";

import filter from "@/assets/icon/searchResult/filter.svg";
import product22 from "@/assets/img/22.png";
import product23 from "@/assets/img/23.png";
import product24 from "@/assets/img/24.png";
import product25 from "@/assets/img/25.png";
import product26 from "@/assets/img/26.png";
import product27 from "@/assets/img/27.png";
import product28 from "@/assets/img/28.png";
import product29 from "@/assets/img/29.png";
import shop16 from "@/assets/img/16.png";
import shop17 from "@/assets/img/17.png";
import shop18 from "@/assets/img/18.png";
import shop19 from "@/assets/img/19.png";
import shop20 from "@/assets/img/20.png";
import shop21 from "@/assets/img/21.png";

export default function SearchResult() {
	const listRecentViewProduct = [
		{
			imgProduct: product22,
			money: "11,200",
			nameProduct: "balenciaga ストンパージャケット",
			nameShop: "simgffj",
			link: "/layout",
		},
		{
			imgProduct: product23,
			money: "9,500",
			nameProduct: "Noir kei ninomiya ラッフルスカート",
			nameShop: "ponta",
			link: "/layout",
		},
		{
			imgProduct: product24,
			money: "6,000",
			nameProduct: "DRIES VAN NOTEN スタッズ",
			nameShop: "佐藤美加",
			link: "/layout",
		},
		{
			imgProduct: product25,
			money: "12,000",
			nameProduct: "W&LT / Psychedelic Knit Vest",
			nameShop: "meangirls",
			link: "/layout",
		},
		{
			imgProduct: product26,
			money: "9,200",
			nameProduct: "アーティザナル トロンプルイユ",
			nameShop: "ReviResonia",
			link: "/layout",
		},
		{
			imgProduct: product27,
			money: "38,000",
			nameProduct: "Archive Denim Half Coat",
			nameShop: "ichigo",
			link: "/layout",
		},
		{
			imgProduct: product28,
			money: "1,200",
			nameProduct: "balenciaga ストンパーブーツ",
			nameShop: "ichigo",
			link: "/layout",
		},
		{
			imgProduct: product29,
			money: "9,500",
			nameProduct: "Noir kei ninomiya ラッフルスカート",
			nameShop: "ichigo",
			link: "/layout",
		},
	];

	return (
		<div className="search-result flex flex-col items-center w-full h-max min-h-full">
			<PageHeader title="メンズジャケットの検索結果" />
			<div className="container flex flex-col gap-5 text-[11px] leading-[13px]">
				<div className="flex flex-col items-end gap-3 pb-[6px] px-3 border-b border-neutral-300">
					<SortDropdown />
					<div className="flex justify-between items-center w-full">
						<StatusDropdown />
						<button className="flex items-center gap-2">
							<img src={filter} alt="filter" className="w-[11px] h-[9px]" />
							<p className="text-[12px] leading-[15px]">絞り込み(1)</p>
						</button>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-x-1 gap-y-2 w-full">
					{listRecentViewProduct?.map((item, index) => (
						<Product data={item} key={index} />
					))}
				</div>
			</div>
			<PolicyTerm />
		</div>
	);
}
